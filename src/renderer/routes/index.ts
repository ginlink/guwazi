import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import { CustomRouteProps } from './types';

const routes: CustomRouteProps[] = [
  {
    component: Home,
    path: '/',
    title: 'Home',
  },
  {
    component: NotFound,
    path: '*',
  },
];

export default routes;
