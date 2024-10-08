import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAuthRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('loggedIn') !== 'true') {
      navigate('/');
    }
  }, [navigate]);
  return;
}
