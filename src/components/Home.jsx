import { useLoaderData, Link } from 'react-router-dom';
import { dateTimeDisplay } from '../utils/dateTimeDisplay';
import validator from 'validator';
import PostContent from './PostContent';

const Home = () => {
  const posts = useLoaderData();
  const recentPosts = posts.slice(1, 5);

  return (
    <div className='element'>
      <section className='latest'>
        {posts && (
          <>
            <h1>{validator.unescape(posts[0].title)}</h1>
            <div>
              <h4>{validator.unescape(posts[0].subtitle)}</h4>
              <p>{dateTimeDisplay(posts[0].created_timestamp)}</p>
            </div>
            <PostContent post={posts[0].body} />
          </>
        )}
      </section>
      <section className='recent'></section>
      {recentPosts && (
        <ul>
          {recentPosts.map(post => (
            <li key={post._id}>
              <Link to={`/posts/${post._id}`}>
                {validator.unescape(post.title)}
              </Link>
              <div>
                <p>{validator.unescape(post.subtitle)}</p>
                <p>Published: {dateTimeDisplay(post.created_timestamp)}</p>
                <p>Comments: {post.comment_count}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
