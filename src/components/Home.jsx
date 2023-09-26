import { useLoaderData, Link } from 'react-router-dom';

const Home = () => {
  const { posts } = useLoaderData();
  console.log(posts);

  return (
    <div className='element'>
      <h1>Blog Home</h1>
      {posts && (
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
              <p>{post.subtitle}</p>
              <p>{post.created_timestamp}</p>
              <p>{post.comment_count}</p>
              <p>{post.post_age_created}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
