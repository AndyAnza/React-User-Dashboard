import React from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';
import UsersTable from '../components/UsersTable';

export default function UsersList() {
  useAuthRedirect();

  return (
    <>
      <UsersTable />
    </>
  );
}
