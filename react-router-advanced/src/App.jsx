// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';

const isAuthenticated = true; // Replace with actual authentication logic

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/*" element={
                    <ProtectedRoute isAuthenticated={isAuthenticated}>
                        <Profile />
                    </ProtectedRoute>
                } />
            </Routes>
        </Router>
    );
};

export default App;
