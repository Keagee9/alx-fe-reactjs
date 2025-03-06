// src/components/Blog.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
    const { postId } = useParams();
    return (
        <div>
            <h2>Blog Post {postId}</h2>
            {/* Fetch and display the blog post based on postId */}
        </div>
    );
};

export default Blog;
