import { RouterProvider } from 'react-router-dom';
import { router } from './providers/AppRouter';

export const App = () => {
  return <RouterProvider router={router} />;
};