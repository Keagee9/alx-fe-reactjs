import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!username) {
      formErrors.username = 'Username is required';
    }
    if (!email) {
      formErrors.email = 'Email is required';
    }
    if (!password) {
      formErrors.password = 'Password is required';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Simulate API call (replace with actual API call)
    console.log('Form submitted:', { username, email, password });

    // Clear form and reset error
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <div>
      <h2>Registration Form</h2>
      {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
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