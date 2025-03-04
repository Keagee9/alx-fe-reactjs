import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query'; // Import QueryClient and QueryClientProvider
import PostsComponent from './components/PostsComponent'; // Import your PostsComponent

const queryClient = new QueryClient(); // Create a new QueryClient instance

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}> {/* Provide the QueryClient to your app */}
      <PostsComponent />
    </QueryClientProvider>
  </React.StrictMode>
);