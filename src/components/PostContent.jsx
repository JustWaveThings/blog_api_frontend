import validator from 'validator';

function PostContent({ post }) {
  const markup = { __html: validator.unescape(post) };
  return <div className='textarea' dangerouslySetInnerHTML={markup} />;
}

export default PostContent;
