import { useEffect, useState } from 'react';
import axios from 'axios';

export default function UsersTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?results=30`)
      .then((response) => {
        console.log(response.data.results);
        setUsers(response.data.results);
      })
      .catch((error) => console.error(`Something went wrong:${error.message}`));
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope='col'>Avatar</th>
            <th scope='col'>Nationality</th>
            <th scope='col'>Title</th>
            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={Math.random()}>
              <th scope='row'>
                <img src={user.picture.thumbnail} alt='User Thumbnail' />
              </th>
              <td>{user.nat}</td>
              <td>{user.name.title}</td>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
