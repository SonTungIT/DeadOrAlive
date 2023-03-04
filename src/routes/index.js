import config from '~/config';
import Login from '~/pages/Authenticated/Login';
import Register from '~/pages/Authenticated/Register';
import Info from '~/pages/Authenticated/Info';
import UserAccounts from '~/pages/Home/Admin/UserAccounts/UserAccounts';
import TaskManagement from '~/pages/Home/Admin/TaskManagement/TaskManagement';
import NotificationManagement from '~/pages/Home/Admin/NotificationManagement/NotificationManagement';
import NewsManagement from '~/pages/Home/Admin/NewsManagement/NewsManagement';
import GameManagement from '~/pages/Home/Admin/GameManagement/GameManagement';
import ShopManagement from '~/pages/Home/Admin/ShopManagement/ShopManagement';
import { DefaultLayout } from '~/components/Layout';
import EditNews from '~/pages/Home/Admin/NewsManagement/EditNews';

const publicRoutes = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.information, component: Info, layout: null },

    //Admin
    { path: config.routes.home, component: UserAccounts, layout: DefaultLayout },
    { path: config.routes.taskManagement, component: TaskManagement, layout: DefaultLayout },
    { path: config.routes.notificationManagement, component: NotificationManagement, layout: DefaultLayout },
    { path: config.routes.newsManagement, component: NewsManagement, layout: DefaultLayout },
    { path: config.routes.gameManagement, component: GameManagement, layout: DefaultLayout },
    { path: config.routes.shopManagement, component: ShopManagement, layout: DefaultLayout },

    //News
    { path: config.routes.editNews, component: EditNews, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
