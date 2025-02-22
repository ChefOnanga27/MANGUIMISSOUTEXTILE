'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface LoginProps {
  setAuth: (auth: boolean) => void;
  setRegistering: (registering: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setAuth, setRegistering }) => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('token', 'dummyToken');
    setAuth(true);
    router.push('/dashboard');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>Pas encore de compte ? <button onClick={() => setRegistering(true)}>Inscrivez-vous</button></p>
    </div>
  );
};

export default Login;
