import { Route } from 'react-router-dom';

import type { Theme } from '@mui/material';

import { CustomIndexRouteProps, CustomPathRouteProps, CustomRouteProps } from '@/routes/types';

function getPageHeight(theme: Theme) {
  const topSpacing = Number(theme.mixins.toolbar.minHeight) + parseInt(theme.spacing(1));
  return `calc(100vh - ${topSpacing}px)`;
}

function renderRoute(routes: CustomRouteProps[]) {
  return routes?.map((route, itemIndex) => {
    const { index } = route as CustomIndexRouteProps;
    const { path, children, component: Component } = route as CustomPathRouteProps;
    return children ? (
      <Route key={path} path={path} element={<Component />}>
        {renderRoute(children)}
      </Route>
    ) : index ? (
      <Route key={itemIndex} index element={<Component />} />
    ) : (
      <Route key={path} path={path} element={<Component />} />
    );
  });
}

export { getPageHeight, renderRoute };
