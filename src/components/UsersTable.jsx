import { useState } from 'react';
import { useUsers } from '../context/UsersProvider';

export default function UsersTable() {
  const { users, setUsers, loading, error } = useUsers();
  const [isHovered, setIsHovered] = useState(null);

  const hoverHandler = () => setIsHovered(true);
  const deleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.login.uuid !== userId);
    setUsers(updatedUsers);
    localStorage.setItem('cachedUsers', JSON.stringify(updatedUsers));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>; // Display error if it occurs

  return (
    <>
      <table>
        <thead>
          <tr>
            <th scope='col'>Avatar</th>

            <th scope='col'>First Name</th>
            <th scope='col'>Last Name</th>
            <th scope='col'>Gender</th>
            <th scope='col'>Age</th>
            <th scope='col'>Nationality</th>
            <th scope='col'>Email</th>
            <th scope='col'>Profile</th>
            <th scope='col'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.login.uuid}
              onMouseOver={hoverHandler}
              onMouseLeave={() => setIsHovered(null)}
            >
              <th scope='row'>
                <img src={user.picture.thumbnail} alt='User Thumbnail' />
              </th>

              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.gender}</td>
              <td>{user.dob.age}</td>
              <td>{user.nat}</td>
              <td>{user.email}</td>
              <td>
                <a
                  href={`users/${user.login.uuid}`}
                  onClick={() => {
                    localStorage.removeItem('user');
                    localStorage.setItem('user', JSON.stringify(user));
                  }}
                >
                  Profile
                </a>
              </td>
              <td>
                {isHovered ? (
                  <button
                    onClick={() => {
                      const confirmed = window.confirm('Delete this user?');
                      if (confirmed) {
                        deleteUser(user.login.uuid);
                      }
                    }}
                  >
                    Delete
                  </button>
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
