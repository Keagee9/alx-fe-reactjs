// UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() { // No props needed
  const { userData } = useContext(UserContext); // Access userData from context

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      {/* ... other user details */}
    </div>
  );
}

export default UserDetails;