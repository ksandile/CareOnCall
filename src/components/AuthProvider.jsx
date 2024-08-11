import React, { useEffect, useState } from 'react';
import { auth } from '../firebase'; // Relative path to firebase.js

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? <p>Welcome, {user.email}</p> : <p>Please log in</p>}
      {children}
    </div>
  );
};

export default AuthProvider;
