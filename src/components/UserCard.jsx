import React from 'react';
import CommentsSection from './CommentsSection';
import '../assets/css/userCard.css';

export default function UserCard() {
  const user = JSON.parse(localStorage.getItem('user'));
  // console.log(user);

  return (
    <>
      <div className='user-card-section'>
        <div className='user-card'>
          <img src={user.picture.medium} alt='Profile Picture'></img>

          <div>
            <h3 className='user-card-name'>Personal Information</h3>
            <table className='user-card-table'>
              <tbody>
                <tr className='user-table-row'>
                  <th scope='row'>First Name</th>
                  <td>{user.name.first}</td>
                </tr>
                <tr className='user-table-row'>
                  <th scope='row'>Last Name</th>
                  <td>{user.name.last}</td>
                </tr>
                <tr className='user-table-row'>
                  <th scope='row'>Age</th>
                  <td>{user.dob.age}</td>
                </tr>
                <tr className='user-table-row'>
                  <th scope='row'>Gender</th>
                  <td>{user.gender}</td>
                </tr>
                <tr className='user-table-row'>
                  <th scope='row'>Nationality</th>
                  <td>{user.nat}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className='user-card-name'>Address</h3>
            <table className='user-card-table'>
              <tbody>
                <tr className='user-table-row'>
                  <th scope='row'>Street</th>
                  <td>{user.location.street.name}</td>
                </tr>
                <tr className='user-table-row'>
                  <th scope='row'>Number</th>
                  <td>{user.location.street.number}</td>
                </tr>
                <tr className='user-table-row'>
                  <th scope='row'>City</th>
                  <td>{user.location.city}</td>
                </tr>
                <tr className='user-table-row'>
                  <th scope='row'>State</th>
                  <td>{user.location.state}</td>
                </tr>
                <tr className='user-table-row'>
                  <th scope='row'>Country</th>
                  <td>{user.location.country}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <h3 className='user-card-name'>Contact</h3>
            <table className='contact-table'>
              <tbody>
                <tr className='user-table-row'>
                  <th scope='row'>Email</th>
                  <td>{user.email}</td>
                </tr>
                <tr className='user-table-row'>
                  <th scope='row'>Phone</th>
                  <td>{user.phone}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <CommentsSection user={user} />
    </>
  );
}
