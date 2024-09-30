import React from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';

export default function UsersList() {
  useAuthRedirect();

  return (
    <>
      <h2>Users List Page</h2>
    </>
  );
}
