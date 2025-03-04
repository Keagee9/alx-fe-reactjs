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

export default App;