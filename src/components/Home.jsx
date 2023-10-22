import { useLoaderData, Link } from 'react-router-dom';
import { dateTimeDisplay } from '../utils/dateTimeDisplay';
import validator from 'validator';
import PostContent from './PostContent';

const Home = () => {
  const posts = useLoaderData();
  const recentPosts = posts.slice(1, 7);

  return (
    <div className='element'>
      <section className='latest'>
        {posts && (
          <>
            <h1>{validator.unescape(posts[0].title)}</h1>
            <div>
              <h4>{validator.unescape(posts[0].subtitle)}</h4>
              <p>{dateTimeDisplay(posts[0].created_timestamp)}</p>
              <p>
                {posts[0].comment_count !== 0
                  ? `Comments: ${posts[0].comment_count}`
                  : `No comments yet`}
              </p>
            </div>
            <PostContent
              post={posts[0].body}
              truncateAtChar={200}
              id={posts[0]._id}
            />
          </>
        )}
      </section>
      <section className='recent'></section>
      <header>
        <h1>Recent posts</h1>
      </header>
      {recentPosts && (
        <ul>
          {recentPosts.map(post => (
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
                <p>
                  {post.comment_count !== 0
                    ? `Comments: ${post.comment_count}`
                    : `No comments yet`}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
