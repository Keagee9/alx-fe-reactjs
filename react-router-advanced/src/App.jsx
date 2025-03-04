import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './components/PostsComponent'; // We'll create this component next

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}





import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'; // Import routing components
import PostsComponent from './components/PostsComponent'; // Import your PostsComponent
import AnotherComponent from './components/AnotherComponent'; // Import another component (create this if needed)

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Posts</Link>
            </li>
            <li>
              <Link to="/another">Another Page</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<PostsComponent />} />
          <Route path="/another" element={<AnotherComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;