import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const admin = {
    username: 'admin1234',
    password: 'password1234',
  };
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function usernameHandler(e) {
    setUsername(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function loginHandler(e) {
    e.preventDefault();
    if (username === admin.username && password === admin.password) {
      localStorage.setItem('loggedIn', 'true');
      navigate('/users');
    } else {
      alert('try again');
    }
  }

  return (
    <>
      <form onSubmit={loginHandler}>
        <h2>Login</h2>
        <input
          type='text'
          id='user'
          minLength={5}
          maxLength={15}
          placeholder='Username'
          required
          value={username}
          onChange={usernameHandler}
        ></input>
        <input
          type='password'
          id='password'
          placeholder='Password'
          minLength={12}
          maxLength={64}
          required
          value={password}
          onChange={passwordHandler}
        ></input>
        <button type='submit'>Login</button>
      </form>
    </>
  );
}
