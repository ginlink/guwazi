import DashboardLayout from '@/layout/dashboard/DashboardLayout';
import LogoOnlyLayout from '@/layout/LogoOnlyLayout';
import NotFound from '@/pages/NotFound';
import Setting from '@/pages/Setting';
import Translate from '@/pages/Translate';
import TranslateConfig from '@/pages/TranslateConfig';
import { Navigate, useRoutes } from 'react-router-dom';

function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        {
          path: 'translate',
          element: <Translate />,
        },
        {
          path: 'translate-config/:pluginShortName',
          element: <TranslateConfig />,
        },
        {
          path: 'setting',
          element: <Setting />,
        },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        {
          path: '/',
          element: <Navigate to={'/dashboard/translate'} />,
        },
        {
          path: '404',
          element: <NotFound />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to={'/404'} />,
    },
  ]);
}

export default Router;
