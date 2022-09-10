import Iconify from '@/components/Iconify';
import { Row } from '@/components/styled';
import { styled } from '@mui/material';

const RootStyle = styled('div')(() => ({}));

const StyledIconify = styled(Iconify)(() => ({
  cursor: `pointer`,
}));

function NavAction() {
  return (
    <RootStyle>
      <Row spacing={['8px']}>
        <StyledIconify icon={'fluent:dark-theme-20-filled'} />
        <StyledIconify icon={'ion:language-outline'} />
        {/* <ThemeAction /> */}
        {/* <LanguageAction /> */}
      </Row>
    </RootStyle>
  );
}

export default NavAction;
