import {
  useCallback,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtersData, setFiltersData] = useState({
    genders: [],
    nationalities: [],
    ages: [],
  });

  useEffect(() => {
    const cachedUsers = localStorage.getItem('cachedUsers');

    if (cachedUsers) {
      const usersData = JSON.parse(cachedUsers);
      setUsers(usersData);
      setFilteredUsers(usersData);
      setFiltersData(extractFiltersData(usersData));
      setLoading(false);
      // console.log(cachedUsers);
    } else {
      axios
        .get(`https://randomuser.me/api/?results=30`)
        .then((response) => {
          const usersData = response.data.results;
          setUsers(usersData);
          setFilteredUsers(usersData);
          setFiltersData(extractFiltersData(usersData));
          localStorage.setItem('cachedUsers', JSON.stringify(usersData));
          setLoading(false);
        })
        .catch((error) => {
          // console.error(`Something went wrong: ${error.message}`);
          setError(error);
          setLoading(false);
        });
    }
  }, []);


  const extractFiltersData = (users) => {
    const genders = [...new Set(users.map((user) => user.gender))]; 
    const nationalities = [...new Set(users.map((user) => user.nat))]; 
    const ages = [
      ...new Set(users.map((user) => Math.floor(user.dob.age / 10) * 10)),
    ]; 
    // console.log(genders, nationalities, ages);
    return { genders, nationalities, ages };
  };

  const applyFilters = useCallback(
    (filters) => {
      let filtered = users;


      if (filters.gender !== 'All') {
        filtered = filtered.filter((user) => user.gender === filters.gender);
      }

      if (filters.nationality) {
        filtered = filtered.filter((user) => user.nat === filters.nationality);
      }


      if (filters.ageRange) {
        filtered = filtered.filter(
          (user) =>
            user.dob.age >= filters.ageRange &&
            user.dob.age < filters.ageRange + 10
        );
      }

      setFilteredUsers(filtered);
    },
    [users]
  ); 

  const exportToCSV = async (data, fileName) => {
    const csvHeader = 'Name,Last,Gender,Nationality,Age\n';
    let csvRows = '';

    data.forEach((user) => {
      const row = `${user.name.first},${user.name.last},${user.gender},${user.nat},${user.dob.age}\n`;
      csvRows += row;
    });


    const csvContent = csvHeader + csvRows;
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = `${fileName}.csv`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('CSV export completed successfully.');
  };

  return (
    <UsersContext.Provider
      value={{
        users: filteredUsers,
        setUsers,
        loading,
        error,
        filtersData,
        applyFilters,
        exportToCSV,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}
