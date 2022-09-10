import { Icon, IconifyIcon } from '@iconify/react';
import { Box, BoxProps } from '@mui/material';

type IconifyProps = BoxProps & {
  icon: IconifyIcon | string;
};

export default function Iconify({ icon, ...other }: IconifyProps) {
  return <Box component={Icon} icon={icon} {...other} />;
}
