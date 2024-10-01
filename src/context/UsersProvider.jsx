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
      setFilteredUsers(usersData); // Initialize filtered users
      setFiltersData(extractFiltersData(usersData)); // Extract filter options
      setLoading(false);
      console.log(cachedUsers);
    } else {
      axios
        .get(`https://randomuser.me/api/?results=30`)
        .then((response) => {
          const usersData = response.data.results;
          setUsers(usersData);
          setFilteredUsers(usersData); // Initialize filtered users
          setFiltersData(extractFiltersData(usersData)); // Extract filter options
          localStorage.setItem('cachedUsers', JSON.stringify(usersData));
          setLoading(false);
        })
        .catch((error) => {
          console.error(`Something went wrong: ${error.message}`);
          setError(error);
          setLoading(false);
        });
    }
  }, []);

  // Extract unique genders, nationalities, and age ranges
  const extractFiltersData = (users) => {
    const genders = [...new Set(users.map((user) => user.gender))]; // Get unique genders
    const nationalities = [...new Set(users.map((user) => user.nat))]; // Get unique nationalities
    const ages = [
      ...new Set(users.map((user) => Math.floor(user.dob.age / 10) * 10)),
    ]; // Group ages into decades
    console.log(genders, nationalities, ages);
    return { genders, nationalities, ages };
  };

  // Memoize applyFilters so that it doesn't get recreated on each render
  const applyFilters = useCallback(
    (filters) => {
      let filtered = users;

      // Apply gender filter
      if (filters.gender !== 'All') {
        filtered = filtered.filter((user) => user.gender === filters.gender);
      }

      // Apply nationality filter
      if (filters.nationality) {
        filtered = filtered.filter((user) => user.nat === filters.nationality);
      }

      // Apply age range filter
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
  ); // Dependencies: users only

  const exportToCSV = async (data, fileName) => {
    // Create CSV headers (the first row of the CSV file)
    const csvHeader = 'Name,Last,Gender,Nationality,Age\n';

    // Create CSV rows (each user's data as a row)
    let csvRows = '';

    // Loop through the data (filtered or all users) to format each user as a CSV row
    data.forEach((user) => {
      const row = `${user.name.first},${user.name.last},${user.gender},${user.nat},${user.dob.age}\n`;
      csvRows += row;
    });

    // Combine the header and rows into the final CSV content
    const csvContent = csvHeader + csvRows;

    // Create a Blob object from the CSV content
    const blob = new Blob([csvContent], { type: 'text/csv' });

    // Create a URL for the Blob so it can be downloaded
    const href = URL.createObjectURL(blob);

    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = href;
    link.download = `${fileName}.csv`; // The name of the downloaded file

    // Add the link to the DOM, click it to download, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Notify the user that the CSV export is complete
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
