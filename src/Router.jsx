import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './components/ErrorPage';

import Home from './components/Home';
import homeLoader from './loaders/homeLoader';
import Posts from './components/Posts';
import Post from './components/Post';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: homeLoader,
        },
        {
          path: '/posts',
          element: <Posts />,
        },
        {
          path: '/posts/:id',
          element: <Post />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
