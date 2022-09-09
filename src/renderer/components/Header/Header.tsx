import { Icon } from '@iconify/react';
import { Box, Stack, styled, Typography } from '@mui/material';
import { useCallback } from 'react';
import { Row } from '../styled';

const StyledFlex = styled(Stack)``;

const { systemAPI } = window;

const OS = window.systemAPI.platform();

export default function Header() {
  const version = '0.1.0';

  const handleMinimize = useCallback(() => {
    systemAPI.minimizeWindow();
  }, []);

  const handleCloce = useCallback(() => {
    systemAPI.closeWindow();
  }, []);

  return (
    <StyledFlex className="drag" alignItems={'center'} justifyContent={'space-between'}>
      <Box style={{ width: 0 }} />
      <Row
        justifyContent={'center'}
        sx={{
          p: ['4px'],
        }}
      >
        <Typography variant={'caption'}>Guwazi - {version}</Typography>
      </Row>
      {OS === 'win32' ? (
        <Box>
          <Stack direction={'row'} className="no-drag">
            <Typography style={{ cursor: 'pointer' }} onClick={handleMinimize}>
              <Icon icon="akar-icons:circle-minus" />
            </Typography>
            <Typography ml={'4px'} style={{ cursor: 'pointer' }} onClick={handleCloce}>
              <Icon icon="ant-design:close-circle-outlined" />
            </Typography>
          </Stack>
        </Box>
      ) : (
        <Box style={{ width: 0 }} />
      )}
    </StyledFlex>
  );
}
