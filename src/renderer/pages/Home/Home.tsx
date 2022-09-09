import { useState, useCallback } from 'react';
import { Box, Button, Input, Stack, Typography } from '@mui/material';

const { guwaziAPI } = window;

function Home() {
  const [translateBefore, setTranslateBefore] = useState('');
  const [translateAfter, setTranslateAfter] = useState('');

  const handleTranslate = useCallback(async () => {
    const res = await guwaziAPI.translate(translateBefore);

    setTranslateAfter(res);
  }, [translateBefore]);

  const handleTranslateBefore = useCallback((e: any) => {
    setTranslateBefore(e.target.value);
  }, []);

  const handleTranslateAfter = useCallback((e: any) => {
    setTranslateAfter(e.target.value);
  }, []);

  return (
    <Box>
      <Stack spacing={['4px']}>
        <Input value={translateBefore} onChange={handleTranslateBefore} />
        <Button variant={'contained'} onClick={handleTranslate}>
          <Typography>翻译</Typography>
        </Button>
        <Input value={translateAfter} onChange={handleTranslateAfter} />
      </Stack>
    </Box>
  );
}

export default Home;
