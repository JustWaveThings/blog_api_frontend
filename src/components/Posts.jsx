import { useLoaderData, Link } from 'react-router-dom';
import { dateTimeDisplay } from '../utils/dateTimeDisplay';
import { commentCountDisplay } from '../utils/commentCountDisplay';
import validator from 'validator';
import PostContent from './PostContent';

const Posts = () => {
  const posts = useLoaderData();
  return (
    <div className='element'>
      <header>
        <h1>All posts</h1>
      </header>
      <br />
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link to={`/posts/${post._id}`}>
              {validator.unescape(post.title)}
            </Link>
            <div>
              <p>{validator.unescape(post.subtitle)}</p>
              <PostContent
                post={post.body}
                truncateAtChar={100}
                id={post._id}
              />
              <p>Published: {dateTimeDisplay(post.created_timestamp)}</p>
              <p>{commentCountDisplay(post.comment_count)}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
