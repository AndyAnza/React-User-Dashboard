import React from 'react';
import useAuthRedirect from '../hooks/useAuthRedirect';

export default function UserDetail() {
  useAuthRedirect();

  return (
    <>
      <h2>User Detail Page</h2>
    </>
  );
}
