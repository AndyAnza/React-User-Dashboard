import React from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';
import '../assets/css/userCard.css';

export default function UserCard() {
  // useAuthRedirect();

  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user);

  return (
    <>
      <div className='user-card'>
        <img src={user.picture.medium} alt='Profile Picture'></img>

        <div>
          <h3 className='user-card-name'>Personal Information</h3>
          <table className='user-card-table'>
            <tr>
              <th>Name</th>
              <td>{user.name.first}</td>
            </tr>
            <tr>
              <th>Last Name</th>
              <td>{user.name.last}</td>
            </tr>
            <tr>
              <th>Age</th>
              <td>{user.dob.age}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{user.gender}</td>
            </tr>
            <tr>
              <th>Nationality</th>
              <td>{user.nat}</td>
            </tr>
          </table>
        </div>

        <div>
          <h3 className='user-card-name'>Address</h3>
          <table className='user-card-table'>
            <tr>
              <th>Street</th>
              <td>{user.location.street.name}</td>
            </tr>
            <tr>
              <th>Number</th>
              <td>{user.location.street.number}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{user.location.city}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{user.location.state}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{user.location.country}</td>
            </tr>
          </table>
        </div>

        <div>
          <h3 className='user-card-name'>Contact</h3>
          <table>
            <tr>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>Phone</th>
              <td>{user.phone}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}
