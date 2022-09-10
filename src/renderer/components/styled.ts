import { Stack, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';

import dividerBg from '@/assets/images/divider.svg';

function getPageHeight(theme: Theme) {
  const topSpacing = Number(theme.mixins.toolbar.minHeight) + parseInt(theme.spacing(1));

  return `calc(100vh - ${topSpacing}px)`;
}

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});

const FullScreenCenteredFlexBox = styled(CenteredFlexBox)(({ theme }) => ({
  width: '100%',
  minHeight: getPageHeight(theme as Theme),
}));

const EllipsisText = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SectionDivider = styled(Divider)({
  width: '1404px',
  height: '38px',
  border: 'none',
  background: `url(${dividerBg}) center no-repeat`,
  backgroundSize: 'cover',
});

const Row = styled(Stack)(() => ({
  alignItems: `center`,
}));

Row.defaultProps = {
  ...Row.defaultProps,
  direction: `row`,
};

const RowStart = styled(Row)(() => ({
  alignItems: `center`,
  justifyContent: `flex-start`,
}));

const RowCenter = styled(Row)(() => ({
  alignItems: `center`,
  justifyContent: `flex-end`,
}));

const RowEnd = styled(Row)(() => ({
  alignItems: `center`,
  justifyContent: `center`,
}));

const Column = styled(Stack)(() => ({}));

const ColumnCenter = styled(Column)(() => ({ alignItems: `center` }));

export {
  FlexBox,
  CenteredFlexBox,
  FullSizeCenteredFlexBox,
  FullScreenCenteredFlexBox,
  EllipsisText,
  SectionDivider,
  Row,
  RowCenter,
  RowStart,
  RowEnd,
  Column,
  ColumnCenter,
  getPageHeight,
};
