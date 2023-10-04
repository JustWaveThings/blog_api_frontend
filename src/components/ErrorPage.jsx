import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = props => {
  let error = useRouteError();
  console.log(props);
  return (
    <div className='element'>
      <Link to='/'>
        You can go back to the home page by clicking here, though!
      </Link>
      <div>{error.message}</div>
      <br />
      <div>{error.status}</div>
      <br />
      <div>{error.stack}</div>
    </div>
  );
};

export default ErrorPage;
