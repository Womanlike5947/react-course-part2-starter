import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import HomePage from './HomePage';
import Layout from './Layout';
import LoginPage from './LoginPage';
import PrivateRoutes from './PrivateRoutes';
import UserDetails from './UserDetails';
import UsersPage from './UsersPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // This is the default route that will be rendered when the path is "/"
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  // 👇🏼 This is a layout route for enforcing layout or business rules
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: 'users',
        element: <UsersPage />,
        children: [{ path: ':id', element: <UserDetails /> }],
      },
    ],
  },
]);

export default router;
