import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const cachedUsers = localStorage.getItem('cachedUsers');

    if (cachedUsers) {
      setUsers(JSON.parse(cachedUsers)); // Use cached data
      setLoading(false); // Data is loaded
    } else {
      // If no cached data, make API call
      axios
        .get(`https://randomuser.me/api/?results=30`)
        .then((response) => {
          setUsers(response.data.results);
          // console.log(response.data.results);
          localStorage.setItem(
            'cachedUsers',
            JSON.stringify(response.data.results)
          ); // Store data in cache
          setLoading(false); // Data is loaded
        })
        .catch((error) => {
          console.error(`Something went wrong: ${error.message}`);
          setError(error); // Set error state
          setLoading(false); // Data loading completed
        });
    }
  }, []); // Runs once on mount

  return (
    <UsersContext.Provider value={{ users, loading, error }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  return useContext(UsersContext);
}

