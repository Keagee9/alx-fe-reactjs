import React, { useState } from 'react';

function RegistrationForm() {
  // ... (state variables)

  // ... (handleSubmit function)

  return (
    <div>
      <h2>Registration Form</h2>

      {/* Display error messages near the corresponding input fields */}
      {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>} 
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;