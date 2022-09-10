import { Box, styled } from '@mui/material';
import { Outlet } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';

const APP_BAR_MOBILE = 24;
const APP_BAR_DESKTOP = 48;

const RootStyle = styled(Box)(() => ({
  display: `flex`,
  minHeight: `100%`,
  overflow: `hidden`,
}));

const MainStyle = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  overflow: `auto`,
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  [theme.breakpoints.up('sm')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

function DashboardLayout() {
  return (
    <RootStyle>
      <DashboardNavbar />
      <DashboardSidebar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}

export default DashboardLayout;
