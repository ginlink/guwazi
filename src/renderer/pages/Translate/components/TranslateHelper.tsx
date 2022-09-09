import { Row } from '@/components/styled';
import { Icon } from '@iconify/react';
import { Box, Snackbar, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { useCallback, useState } from 'react';

const StyledIconBox = styled(Box)(({ theme }) => ({
  width: `24px`,
  height: `24px`,
  cursor: 'pointer',
  borderRadius: `4px`,
  padding: `4px`,
  ':hover': {
    background: theme.palette.grey[400],
  },
}));

function TranslateHelper({
  onCopy,
  onTranslate,
}: {
  onCopy?: () => void;
  onTranslate?: () => void;
}) {
  const theme = useTheme();

  return (
    <Row justifyContent={'space-between'} spacing={['8px']}>
      {onCopy ? (
        <StyledIconBox onClick={() => onCopy && onCopy()}>
          <Icon icon={'bx:copy'} />
        </StyledIconBox>
      ) : null}

      {onTranslate ? (
        <StyledIconBox onClick={() => onTranslate && onTranslate()}>
          <Icon icon={'bi:translate'} />
        </StyledIconBox>
      ) : null}
    </Row>
  );
}

export default TranslateHelper;
