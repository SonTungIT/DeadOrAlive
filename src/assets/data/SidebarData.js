import {
    AccountUserIcon,
    BookOpenIcon,
    GradeIcon,
    RollAltIcon,
    SwordIcon,
    ShopIcon,
    ArrowDownIcon,
    ArrowLeftIcon,
} from '~/components/Layout/components/Icons';
import config from '~/config';

export const SidebarData = [
    {
        title: 'TÀI KHOẢN USER',
        path: config.routes.userManagement,
        icon: <AccountUserIcon />,
        iconClosed: <ArrowDownIcon />,
        iconOpened: <ArrowLeftIcon />,
    },
    {
        title: 'NHIỆM VỤ',
        path: config.routes.taskManagement,
        icon: <BookOpenIcon />,
        iconClosed: <ArrowDownIcon />,
        iconOpened: <ArrowLeftIcon />,
    },
    {
        title: 'THÔNG BÁO',
        path: config.routes.notificationManagement,
        icon: <GradeIcon />,
        iconClosed: <ArrowDownIcon />,
        iconOpened: <ArrowLeftIcon />,
    },
    {
        title: 'Tin Tức',
        path: config.routes.newsManagement,
        icon: <RollAltIcon />,
        iconClosed: <ArrowDownIcon />,
        iconOpened: <ArrowLeftIcon />,
    },
    {
        title: 'Game',
        path: config.routes.gameManagement,
        icon: <SwordIcon />,
        iconClosed: <ArrowDownIcon />,
        iconOpened: <ArrowLeftIcon />,
    },
    {
        title: 'Shop',
        path: config.routes.shopManagement,
        icon: <ShopIcon />,
        iconClosed: <ArrowDownIcon />,
        iconOpened: <ArrowLeftIcon />,
    },
];
