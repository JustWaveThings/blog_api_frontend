/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import postJSON from '../utils/postComment';

function CommentForm({ id }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => postJSON(data, id);

  return (
    <div className='comment_form'>
      <form onSubmit={handleSubmit(onSubmit)} encType={'application/json'}>
        <input
          defaultValue=''
          {...register('name', {
            required: 'Required',
          })}
        />
        <p>{errors.name?.message} </p>

        <input
          defaultValue=''
          {...register('body', {
            required: 'Required',
            minLength: { value: 4, message: 'must be at least 4 characters' },
          })}
        />
        <p>{errors.body?.message} </p>

        <input type='submit' />
      </form>
    </div>
  );
}

export default CommentForm;
