import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { CenteredFlexBox, FullSizeCenteredFlexBox } from '@/components/styled';
import { giphy404, messages } from '@/constants';
import { Box, Button } from '@mui/material';

import { NavLink as RouterLink, useLocation } from 'react-router-dom';

function NotFound() {
  const location = useLocation();
  console.log('[location]:', location);

  return (
    <Container sx={{ height: '100%' }}>
      <FullSizeCenteredFlexBox flexDirection="column">
        <iframe
          src={giphy404}
          width="100%"
          height="50%"
          style={{ maxHeight: '60%', maxWidth: '100%' }}
          frameBorder="0"
          allowFullScreen
        />
        <CenteredFlexBox flexDirection="column">
          <Typography sx={{ mt: 2 }} variant="h4" color="error">
            404 Not Found
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h4" sx={{ color: (theme) => theme.palette.info.main }}>
            {messages[404]}
          </Typography>

          <Box mt={['16px']}>
            <Button variant={'contained'} component={RouterLink} to={'/'}>
              Go Home
            </Button>
          </Box>
        </CenteredFlexBox>
      </FullSizeCenteredFlexBox>
    </Container>
  );
}

export default NotFound;
