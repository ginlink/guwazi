import { Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import routes from '..';
import { getPageHeight, renderRoute } from './utils';

function Pages() {
  return (
    <Box sx={{ minHeight: (theme) => getPageHeight(theme) }}>
      <Routes>{renderRoute(routes)}</Routes>
    </Box>
  );
}

export default Pages;
