/* eslint-disable react/prop-types */
import validator from 'validator';
import { Link } from 'react-router-dom';

function PostContent({ post, truncateAtChar, id }) {
  const truncate = truncateAtChar > 0 && post.length > truncateAtChar;
  if (truncate) {
    post = `${validator.unescape(post).slice(0, truncateAtChar)}`;
  }

  const markup = { __html: validator.unescape(post) };
  return (
    <div className='post-content'>
      <div className='textarea' dangerouslySetInnerHTML={markup} />
      {truncate && <Link to={`/posts/${id}`}> ...Read More</Link>}
    </div>
  );
}

export default PostContent;
