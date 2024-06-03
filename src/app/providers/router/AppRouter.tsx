import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { GreetingPage } from '@/pages/GreetingPage';
import { TestingPage } from '@/pages/TestingPage';
import { ResultPage } from '@/pages/ResultPage';

enum Routes {
  GREETING = '/',
  TESTING = '/testing',
  RESULT = '/result',
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
  {
    path: Routes.RESULT,
    element: <ResultPage />,
  },
];

export const router = createBrowserRouter(routes);
