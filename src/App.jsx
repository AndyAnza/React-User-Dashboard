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
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/users' element={<UsersList />} />
          <Route path='/users/:id' element={<UserDetail />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
