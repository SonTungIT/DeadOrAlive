import { AccountUserIcon, ArrowDownIcon, ArrowLeftIcon } from '~/components/Layout/components/Icons';
import config from '~/config';

export const SidebarDataUser = [
    {
        title: 'TÀI KHOẢN USER',
        path: config.routes.userManagement,
        icon: <AccountUserIcon />,
        iconClosed: <ArrowDownIcon />,
        iconOpened: <ArrowLeftIcon />,
    },
];
