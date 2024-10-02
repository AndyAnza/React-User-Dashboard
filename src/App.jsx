import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Login from './pages/Login';
import UsersList from './pages/UsersList';
import UserDetail from './pages/UserDetail';

function App() {
  const [message, setMessage] = useState('');
  const [closeModal, setCloseModal] = useState('none');

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/users' element={<UsersList message={message} setMessage={setMessage} closeModal={closeModal} setCloseModal={setCloseModal}/>} />
          <Route path='/users/:id' element={<UserDetail />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
