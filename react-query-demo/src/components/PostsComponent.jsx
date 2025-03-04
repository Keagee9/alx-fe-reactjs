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
    </div>
  );
};

export default PostsComponent;