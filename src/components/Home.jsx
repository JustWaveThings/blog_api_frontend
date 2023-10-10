import { useLoaderData, Link } from 'react-router-dom';
import { dateTimeDisplay } from '../utils/dateTimeDisplay';

const Home = () => {
  const { posts } = useLoaderData();

  return (
    <div className='element'>
      <h1>Blog Home</h1>
      {posts && (
        <ul>
          {posts.map(post => (
            <li key={post._id}>
              <Link to={`/posts/${post._id}`}>{post.title}</Link>
              <p>Subhead: {post.subtitle}</p>
              <p>
                Created: {dateTimeDisplay(post.created_timestamp)}
                {` - `}
                {post.created_timestamp_formatted}
              </p>
              <p>Comments: {post.comment_count}</p>
              <p>Likes: {post.likes}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
