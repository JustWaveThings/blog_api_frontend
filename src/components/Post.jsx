import { useLoaderData } from 'react-router-dom';

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

      {/*  <p>Comments: </p>
      {post.comments.map(comment => (
        <div key={comment._id}>
          <p>{comment.body}</p>
          <p>{comment.created_timestamp_formatted}</p>
          <p>{comment.comment_age_created} days old</p>
          <p>
            {comment.likes === 0
              ? 'Be the first person to like this comment.'
              : comment.likes === 1
              ? `1 like`
              : `${comment.likes} likes`}
          </p>
        </div>
      ))} */}
    </div>
  );
}

export default Post;
