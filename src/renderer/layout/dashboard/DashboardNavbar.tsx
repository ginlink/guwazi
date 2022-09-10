import { Header } from '@/components/Header';
import { alpha, AppBar, Box, styled, Typography } from '@mui/material';
import NavAction from './NavAction';

const DRAWER_WIDTH = 168;

const RootStyle = styled(AppBar)(({ theme }) => ({
  height: `48px`,
  alignItems: `center`,
  flexDirection: `row`,
  justifyContent: `space-between`,
  color: `unset`,
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  padding: `8px 16px`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

function DashboardNavbar() {
  // const isDesktop = true;
  // const isDesktop = useResponsive('up', 'lg');

  return (
    <RootStyle className={'drag'}>
      <Box sx={{ width: 0 }} />
      <Header />
      <NavAction />
    </RootStyle>
  );
}

export default DashboardNavbar;
