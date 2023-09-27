import { useLoaderData, Link } from 'react-router-dom';

function Post() {
  const post = useLoaderData();
  console.log(post);

  return (
    <div className='element'>
      <p>Title: {post.title}</p>
      <p>Subheading: {post.subtitle}</p>
      <p>
        Created: {post.created_timestamp_formatted} ({post.post_age_created}{' '}
        days old)
      </p>
      <p></p>
      <p>
        {post.likes === 0
          ? 'Be the first person to like this post.'
          : post.likes === 1
          ? `1 like`
          : `${post.likes} likes`}
      </p>
      <br />
      <p>{post.body}</p>

      <p>All Comments: </p>
      {post.comment_array.map(comment => (
        <div key={comment._id}>
          <p>Commenter: {comment.name}</p>
          <p>
            Posted: {comment?.published_timestamp_formatted} (
            {comment?.comment_age_published} days ago)
          </p>
          <p>Comment: {comment.body}</p>
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

      <p>Add a Comment: </p>
      <form
        method='POST'
        action={`http://localhost:3000/posts/${post._id}/comment `}>
        <label htmlFor='name'>Name: </label>
        <input type='text' id='name' name='name' />
        <label htmlFor='body'>Comment: </label>
        <textarea id='body' name='body' />
        <input type='hidden' name='parent_post' value={post._id} />
        <button>Submit</button>
      </form>
      <nav>
        <Link to='/'>
          <button>Back to Posts</button>
        </Link>
      </nav>
    </div>
  );
}

export default Post;
