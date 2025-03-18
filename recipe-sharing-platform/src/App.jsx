// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage'; // Only import HomePage once
// import SignUpPage from './components/SignUpPage'; // Make sure these are only imported once as well
// import LoginPage from './components/LoginPage';
// import CurrencyConverter from './components/CurrencyConverter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white font-bold text-xl">
              My Recipe App
            </Link>
            {/* ... (rest of your navigation) ... */}
          </div>
        </nav>

        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* ... (other routes) ... */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;