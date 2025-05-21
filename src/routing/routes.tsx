import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import Layout from './Layout';
import UserDetailPage from './UserDetailPage';
import UserListPage from './UserListPage';

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
        element: <UserListPage />,
      },
      {
        path: 'users/:id',
        element: <UserDetailPage />,
      },
    ],
  },
]);

export default router;
