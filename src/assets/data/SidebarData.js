import {
    AccountUserIcon,
    BookOpenIcon,
    GradeIcon,
    RollAltIcon,
    SwordIcon,
    ShopIcon,
} from '~/components/Layout/components/Icons';
import config from '~/config';

export const SidebarData = [
    {
        title: 'Admin',
        path: config.routes.admin,
        icon: <AccountUserIcon />,
    },
    {
        title: 'Task',
        path: config.routes.taskManage,
        icon: <BookOpenIcon />,
    },
    {
        title: 'Notification',
        path: config.routes.notificationManage,
        icon: <GradeIcon />,
    },
    {
        title: 'News',
        path: config.routes.newsManage,
        icon: <RollAltIcon />,
    },
    {
        title: 'Game',
        path: config.routes.gameManage,
        icon: <SwordIcon />,
    },
    {
        title: 'Shop',
        path: config.routes.shopManage,
        icon: <ShopIcon />,
    },
];
