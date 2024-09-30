import React from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';
import UsersTable from '../components/UsersTable';
import Header from '../components/Header';
import { UsersProvider } from '../context/UsersProvider';
import Filters from '../components/Filters';

export default function UsersList() {
  useAuthRedirect();

  return (
    <>
      <Header />
      <UsersProvider>
        <Filters />
        <UsersTable />
      </UsersProvider>
    </>
  );
}
