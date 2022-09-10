import Iconify from '../../components/Iconify';
import { NavProp } from './types';

const getIcon = (name: string) => <Iconify icon={name} width={22} height={22} />;

const navConfig: NavProp[] = [
  {
    title: 'Translate',
    path: '/dashboard/translate',
    icon: getIcon('system-uicons:translate'),
  },
  {
    title: 'TranslateConfig',
    path: '/dashboard/translate-config',
    icon: getIcon('ant-design:setting-filled'),
    children: [
      {
        title: 'Setting11',
        path: '/dashboard/setting',
      },
    ],
  },
  {
    title: 'Setting',
    path: '/dashboard/setting',
    icon: getIcon('ant-design:setting-filled'),
  },
];

export default navConfig;
