import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const { title } = useLoaderData();
  return (
    <div className='element'>
      <h1>Blog Home</h1>
      {{ title } && <p>{title}</p>}
    </div>
  );
};

export default Home;
