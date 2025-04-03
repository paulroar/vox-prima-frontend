import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const UserTest = () => {
  const { user, login, logout } = useContext(UserContext);

  const handleFakeLogin = () => {
    login({
      name: 'Test User',
      email: 'test@example.com',
      token: '123456'
    });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>User Context Test</h2>
      {user ? (
        <>
          <p>Logged in as: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>No user logged in</p>
          <button onClick={handleFakeLogin}>Login as Test User</button>
        </>
      )}
    </div>
  );
};

export default UserTest;
