import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // Import routing components
import Profile from './components/Profile'; // Import your Profile component
import BlogPost from './components/BlogPost'; // Import your BlogPost component
import ProtectedRoute from './components/ProtectedRoute'; // Import your ProtectedRoute component

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/blog/1">Blog Post 1</Link>
            </li>
            <li>
              <Link to="/blog/2">Blog Post 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/blog/:postId" element={<BlogPost />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile/*" element={<Profile />} />
          </Route>

          {/* Add other routes here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



