import React from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';
import UsersTable from '../components/UsersTable';
import Header from '../components/Header';
import { UsersProvider } from '../context/UsersProvider';
import Filters from '../components/Filters';

export default function UsersList({message, setMessage, closeModal, setCloseModal}) {
  useAuthRedirect();

  return (
    <div className='layout'>
      <Header />
      <div className='main'>
        <UsersProvider>
          <Filters />
          <UsersTable message={message} setMessage={setMessage} closeModal={closeModal} setCloseModal={setCloseModal}/>
        </UsersProvider>
      </div>
    </div>
  );
}
