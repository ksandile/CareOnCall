// src/components/Register.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Import function from Firebase
import { auth } from '../firebase'; // Correct path to firebase

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Update function usage
      // Redirect or update UI after successful registration
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Register;
