import { Row } from '@/components/styled';
import { Icon } from '@iconify/react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertColor,
  Box,
  Input,
  Snackbar,
  Typography,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/system';
import { useCallback, useState } from 'react';
import TranslateHelper from './components/TranslateHelper';

const StyledBox = styled(Box)(({ theme }) => ({
  '.MuiAccordion-root': {
    background: theme.palette.grey[300],
    borderRadius: `8px`,
  },
  '.MuiAccordion-root .MuiAccordionSummary-root': {
    minHeight: `unset`,
    padding: `4px 8px`,
  },
  '.MuiAccordion-root .MuiAccordionSummary-content': {
    margin: `0`,
  },
  '.MuiAccordion-root .MuiAccordionDetails-root': {
    padding: `0 8px 8px 8px`,
  },
}));

const StyledInput = styled(Input)(() => ({
  background: `transparent`,
  width: `100%`,
}));

const StyledSnackbar = styled(Snackbar)(() => ({
  width: `200px`,
  left: `50%`,
  transform: `translate(-50%)`,
}));

const { guwaziAPI, systemAPI } = window;

function Translate() {
  const [translateBefore, setTranslateBefore] = useState('');
  const [translateAfter, setTranslateAfter] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(true);
  const [snackbarInfo, setSnackbarInfo] = useState<{
    open: boolean;
    message: string;
    duration: number;
    type: AlertColor;
  }>({ open: false, message: '', duration: 1500, type: 'success' });

  const theme = useTheme();

  const handleCopy = useCallback((text: string) => {
    console.log('[handleCopy]:');
    systemAPI.writeClipboardText(text);
    setSnackbarInfo((prev) => {
      return {
        ...prev,
        open: true,
        message: '复制成功',
      };
    });
  }, []);

  const handleTranslate = useCallback(async () => {
    const res = await guwaziAPI.translate(translateBefore);

    setTranslateAfter(res);
    setExpanded(true);
  }, [translateBefore]);

  const handleTranslateBefore = useCallback((e: any) => {
    setTranslateBefore(e.target.value);
  }, []);

  const handleTranslateAfter = useCallback((e: any) => {
    setTranslateAfter(e.target.value);
  }, []);

  const handleClose = useCallback(() => {
    setSnackbarInfo((prev) => {
      return {
        ...prev,
        open: false,
        message: '',
      };
    });
  }, []);

  return (
    <StyledBox
      sx={{
        p: ['16px 12px'],
      }}
    >
      <Box
        sx={{
          background: theme.palette.grey[300],
          borderRadius: `8px`,
          p: ['4px 8px'],
        }}
      >
        <StyledInput
          disableUnderline
          multiline
          rows={2}
          value={translateBefore}
          onChange={handleTranslateBefore}
        />

        <TranslateHelper onCopy={() => handleCopy(translateBefore)} onTranslate={handleTranslate} />
      </Box>

      <Box
        sx={{
          background: theme.palette.grey[300],
          borderRadius: `8px`,
          p: ['4px 8px'],
          mt: ['12px'],
        }}
      >
        <Row justifyContent={'space-around'} spacing={['8px']}>
          <Typography variant={'body2'}>自动选择</Typography>
          <Typography>==</Typography>
          <Typography variant={'body2'}>自动选择</Typography>
        </Row>
      </Box>

      <Box sx={{ mt: ['12px'] }}>
        <Accordion expanded={expanded} onChange={() => setExpanded((prev) => !prev)}>
          <AccordionSummary
            expandIcon={<Icon icon={'eva:arrow-ios-downward-fill'} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant={'body2'} fontWeight={500}>
              有道翻译
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledInput
              disableUnderline
              multiline
              rows={2}
              value={translateAfter}
              onChange={handleTranslateAfter}
            />
            <TranslateHelper onCopy={() => handleCopy(translateAfter)} />
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ mt: ['12px'] }}>
        <Accordion expanded={expanded} onChange={() => setExpanded((prev) => !prev)}>
          <AccordionSummary
            expandIcon={<Icon icon={'eva:arrow-ios-downward-fill'} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant={'body2'} fontWeight={500}>
              有道翻译
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledInput
              disableUnderline
              multiline
              rows={2}
              value={translateAfter}
              onChange={handleTranslateAfter}
            />
            <TranslateHelper onCopy={() => handleCopy(translateAfter)} />
          </AccordionDetails>
        </Accordion>
      </Box>

      <Box sx={{ mt: ['12px'] }}>
        <Accordion expanded={expanded} onChange={() => setExpanded((prev) => !prev)}>
          <AccordionSummary
            expandIcon={<Icon icon={'eva:arrow-ios-downward-fill'} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant={'body2'} fontWeight={500}>
              有道翻译
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <StyledInput
              disableUnderline
              multiline
              rows={2}
              value={translateAfter}
              onChange={handleTranslateAfter}
            />
            <TranslateHelper onCopy={() => handleCopy(translateAfter)} />
          </AccordionDetails>
        </Accordion>
      </Box>

      <StyledSnackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbarInfo.open}
        onClose={handleClose}
        message={snackbarInfo.message}
        autoHideDuration={snackbarInfo.duration}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {snackbarInfo.message}
        </Alert>
      </StyledSnackbar>
    </StyledBox>
  );
}

export default Translate;
