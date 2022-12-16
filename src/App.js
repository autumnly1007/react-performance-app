import { useEffect, useState } from 'react';
import { A } from './components/A';
import { B } from './components/B';

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <input type='text' onChange={(e) => setValue(e.target.value)} />
      <div style={{ display: 'flex' }}>
        <A message={value} posts={posts} />
        <B message={value} posts={posts} />
      </div>
    </div>
  );
}

export default App;
