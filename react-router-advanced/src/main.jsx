import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // Import your main App component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap your application with BrowserRouter */}
      <Routes> {/* Use Routes to define your routes */}
        <Route path="/*" element={<App />} /> {/* Define a route for your App component */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);