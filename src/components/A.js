import React from 'react';

export const A = ({ message, posts }) => {
  return (
    <div>
      <h1>A Component</h1>
      <p>{message}</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
