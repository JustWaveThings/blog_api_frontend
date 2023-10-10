import { useLoaderData, Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import validator from 'validator';
import PostContent from './PostContent';
import { dateTimeDisplay } from '../utils/dateTimeDisplay';

function Post() {
  const post = useLoaderData();

  return (
    <div className='element'>
      <p>Title: {validator.unescape(post.title)}</p>
      <p>Subheading: {validator.unescape(post.subtitle)}</p>
      <p>
        Created: {dateTimeDisplay(post.created_timestamp)}
        {` - `}
        {post.created_timestamp_formatted}
      </p>
      <p>
        {post.likes === 0
          ? 'Be the first person to like this post.'
          : post.likes === 1
          ? `1 like`
          : `${post.likes} likes`}
      </p>
      <br />
      <PostContent />
      <br />
      <p>All Comments: </p>
      <br />
      {post.comment_array.map(comment => (
        <div className='comment' key={comment._id}>
          <p>Name: {comment.name}</p>
          <p>
            Posted: {dateTimeDisplay(comment.published_timestamp)}
            {` - `}
            {comment?.published_timestamp_formatted}
          </p>
          <p className='textarea'>
            Comment: {validator.unescape(comment.body)}
          </p>
          <p>
            {comment.likes === 0
              ? '0 likes'
              : comment.likes === 1
              ? `1 like`
              : `${comment.likes} likes`}
            <button>Like</button>
            <button>Report</button>
          </p>
        </div>
      ))}
      <br />
      <p>Add a Comment: </p>
      <br />
      <CommentForm id={post._id} />
      <br />
      <nav>
        <Link to='/'>
          <button>Back to Posts</button>
        </Link>
      </nav>
      <br />
    </div>
  );
}

export default Post;
