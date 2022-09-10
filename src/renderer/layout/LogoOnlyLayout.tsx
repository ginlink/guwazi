import { Icon } from '@iconify/react';
import { styled } from '@mui/material';
import { Outlet } from 'react-router-dom';

const RootStyle = styled('div')(() => ({
  minHeight: `100%`,
}));

function LogoOnlyLayout() {
  return (
    <RootStyle>
      <Icon icon={'system-uicons:translate'} />
      <Outlet />
    </RootStyle>
  );
}

export default LogoOnlyLayout;
