import React from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';
import Header from '../components/Header';

export default function UserDetail() {
  useAuthRedirect();

  return (
    <>
      <Header />
      <h2>User Detail Page</h2>
    </>
  );
}
