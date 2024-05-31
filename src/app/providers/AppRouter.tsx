import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { GreetingPage } from '@/pages/GreetingPage';
import { TestingPage } from '@/pages/TestingPage';

enum Routes {
  GREETING = '/',
  TESTING = '/testing',
}

interface RouteObject {
  path: Routes;
  element: ReactNode;
}

const routes: RouteObject[] = [
  {
    path: Routes.GREETING,
    element: <GreetingPage />,
  },
  {
    path: Routes.TESTING,
    element: <TestingPage />,
  },
];

export const router = createBrowserRouter(routes);
