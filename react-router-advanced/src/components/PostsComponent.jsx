import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const PostsComponent = () => {
  const { isLoading, error, data: posts, refetch } = useQuery('posts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  });

  if (isLoading) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <button onClick={refetch}>Refresh Posts</button>
      {/* Caching Behavior Explanation */}
      <p>
        <strong>Caching:</strong> React Query automatically caches the fetched posts. If you navigate away
        from this component and then come back, the data will load almost instantly from the cache,
        reducing unnecessary API calls.
      </p>
      <p>
        <strong>Refetching:</strong> Clicking the "Refresh Posts" button triggers a manual refetch of the data.
        This allows you to update the posts on demand, ensuring you have the latest information.
      </p>
    </div>
  );
};

export default PostsComponent;