import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

export default function Login() {
  return (
    <>
      <Header />
      <div className='main'>
        <LoginForm />
      </div>
    </>
  );
}
