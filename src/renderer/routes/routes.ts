import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Translate from '@/pages/Translate';
import { CustomRouteProps } from './types';

const routes: CustomRouteProps[] = [
  {
    component: Translate,
    path: '/',
    title: 'translate',
  },
  {
    component: Home,
    path: '/home',
    title: 'Home',
  },
  {
    component: NotFound,
    path: '*',
  },
];

export default routes;
