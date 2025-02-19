import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => { // Capital 'P'
  const [userData, setUserData] = useState({ name: "Jane Doe", email: "jane.doe@example.com" });

  return (
    <UserContext.Provider value={{ userData, setUserData }}> {/* Correct 'value' */}
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;