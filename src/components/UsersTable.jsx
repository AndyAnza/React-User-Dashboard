import { useUsers } from '../context/UsersProvider';

export default function UsersTable() {
  const { users, loading, error } = useUsers();

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
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.login.uuid}>
              <th scope='row'>
                <img src={user.picture.thumbnail} alt='User Thumbnail' />
              </th>

              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.gender}</td>
              <td>{user.dob.age}</td>
              <td>{user.nat}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
