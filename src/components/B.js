import React, { useCallback } from 'react';

const Message = React.memo(({ message }) => {
  return <p>{message}</p>;
});

const ListItem = React.memo(({ post }) => {
  console.log('ListItem compoents is rendering');
  return (
    <li>
      <p>{post.title}</p>
    </li>
  );
});

const List = React.memo(({ posts, testFunc }) => {
  console.log('List compoents is rendering');
  return (
    <ul>
      {posts.map((post) => (
        <ListItem key={post.id} post={post} />
      ))}
    </ul>
  );
});

export const B = ({ message, posts }) => {
  const testFunc = useCallback(() => {}, []);
  console.log('B compoents is rendering');
  return (
    <div>
      <h1>B Component</h1>
      <Message message={message} />
      <List posts={posts} testFunc={testFunc} />
    </div>
  );
};
