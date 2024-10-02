// eslint-disable-next-line no-unused-vars
import React from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';
import Header from '../components/Header';
import UserCard from '../components/UserCard';

export default function UserDetail() {
  useAuthRedirect();

  return (
    <>
      <Header />
      <div className='main'>
        <UserCard />
      </div>
    </>
  );
}
