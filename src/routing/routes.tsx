import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Layout from './Layout';
import UserDetails from './UserDetails';
import UsersPage from './UsersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        // This is the default route that will be rendered when the path is "/"
        element: <HomePage />,
      },
      {
        path: 'users',
        element: <UsersPage />,
        children: [{ path: ':id', element: <UserDetails /> }],
      },
    ],
  },
]);

export default router;
