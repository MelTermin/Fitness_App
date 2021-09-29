import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase'

const UserContext = createContext({ user: null });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      setUser(JSON.parse(localStorage.getItem('currentUser')));
    }
  }, []);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('currentUser'))) {
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      setUser(currentUser);
    }

    const unsub = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        const { displayName, email } = authUser;
        localStorage.setItem(
          'currentUser',
          JSON.stringify({ displayName: displayName || email, email })
        );
        setUser({ displayName: displayName || email, email });
      } else {
        setUser(null)
        localStorage.removeItem("currentUser")
      }
    });

    return unsub;
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;