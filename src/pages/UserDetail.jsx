import React from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';
import Header from '../components/Header';

export default function UserDetail() {
  useAuthRedirect();

  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user);

  return (
    <>
      <Header />

      <div className='user-card'>
        <img src={user.picture.medium} alt='Profile Picture'></img>

        <div>
          <h3>Personal Information</h3>
          <ul>
            <li>{user.name.first}</li>
            <li>{user.name.last}</li>
            <li>{user.dob.age}</li>
            <li>{user.gender}</li>
            <li>{user.nat}</li>
          </ul>
        </div>

        <div>
          <h3>Address</h3>
          <ul>
            <li>{user.location.street.name}</li>
            <li>{user.location.street.number}</li>
            <li>{user.location.city}</li>
            <li>{user.location.state}</li>
            <li>{user.location.country}</li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>{user.email}</li>
            <li>{user.phone}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
