'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface RegisterProps {
  setRegistering: (registering: boolean) => void;
}

const Register: React.FC<RegisterProps> = ({ setRegistering }) => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inscription réussie ! Redirection vers la connexion...');
    setRegistering(false);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
      <p>Déjà un compte ? <button onClick={() => setRegistering(false)}>Connectez-vous</button></p>
    </div>
  );
};

export default Register;
