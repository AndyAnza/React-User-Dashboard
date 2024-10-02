import React from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';
import '../assets/css/userCard.css';

export default function UserCard() {

  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user);

  return (
    <div className='user-card-section'>
      <div className='user-card'>
        <img src={user.picture.medium} alt='Profile Picture'></img>

        <div>
          <h3 className='user-card-name'>Personal Information</h3>
          <table className='user-card-table'>
            <tr className='user-table-row'>
              <th>Name</th>
              <td>{user.name.first}</td>
            </tr>
            <tr className='user-table-row'>
              <th>Last Name</th>
              <td>{user.name.last}</td>
            </tr>
            <tr className='user-table-row'>
              <th>Age</th>
              <td>{user.dob.age}</td>
            </tr>
            <tr className='user-table-row'>
              <th>Gender</th>
              <td>{user.gender}</td>
            </tr>
            <tr className='user-table-row'>
              <th>Nationality</th>
              <td>{user.nat}</td>
            </tr>
          </table>
        </div>

        <div>
          <h3 className='user-card-name'>Address</h3>
          <table className='user-card-table'>
            <tr className='user-table-row'>
              <th>Street</th>
              <td>{user.location.street.name}</td>
            </tr>
            <tr className='user-table-row'>
              <th>Number</th>
              <td>{user.location.street.number}</td>
            </tr>
            <tr className='user-table-row'>
              <th>City</th>
              <td>{user.location.city}</td>
            </tr>
            <tr className='user-table-row'>
              <th>State</th>
              <td>{user.location.state}</td>
            </tr>
            <tr className='user-table-row'>
              <th>Country</th>
              <td>{user.location.country}</td>
            </tr>
          </table>
        </div>

        <div>
          <h3 className='user-card-name'>Contact</h3>
          <table className='contact-table'>
            <tr className='user-table-row'>
              <th>Email</th>
              <td>{user.email}</td>
            </tr>
            <tr className='user-table-row'>
              <th>Phone</th>
              <td>{user.phone}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
