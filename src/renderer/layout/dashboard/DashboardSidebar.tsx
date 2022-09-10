import NavSection from '@/components/NavSection';
import Scrollbar from '@/components/Scrollbar';
import { Box, Drawer, styled } from '@mui/material';
import navConfig from './NavConfig';

const DRAWER_WIDTH = 168;
const APP_BAR_DESKTOP = 48;

const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

function DashboardSidebar() {
  const isDesktop = true;
  // const isDesktop = useResponsive('up', 'lg');

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
      }}
    >
      <NavSection navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      {isDesktop && (
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              bgcolor: 'background.default',
              // borderRightStyle: 'dashed',
              paddingTop: `${APP_BAR_DESKTOP}px`,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </RootStyle>
  );
}

export default DashboardSidebar;
