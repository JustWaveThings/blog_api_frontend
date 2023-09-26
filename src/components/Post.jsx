import { useLoaderData } from 'react-router-dom';

function Post() {
  const post = useLoaderData();
  console.log(post);

  return <div className='element'>{post?.title}</div>;
}

export default Post;
