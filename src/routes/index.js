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
import ServerGame from '~/pages/Home/Admin/GameManagement/GameDetails/ServerGame/ServerGame';
import UserLayout from '~/components/Layout/UserLayout';
//Cong add
import LoginLayout from '~/components/Layout/LoginPayout'
import UserLogin from '~/pages/Home/Login/Home/UserLogin';
import UserDow from '~/pages/Home/Login/Download/UserDow';
import UserUpdate from '~/pages/Home/Login/Update/UserUpdate';
import UserGame from '~/pages/Home/Login/Game/UserGame';

import User from '~/pages/Home/User/User';

import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

//import Game
import FirstGame from '~/pages/Home/Admin/GameManagement/GameDetails/FirstGame';

const publicRoutes = [
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.information, component: Info, layout: null },

    //Admin
    { path: config.routes.userManagement, component: UserAccounts, layout: DefaultLayout },
    { path: config.routes.taskManagement, component: TaskManagement, layout: DefaultLayout },
    { path: config.routes.notificationManagement, component: NotificationManagement, layout: DefaultLayout },
    { path: config.routes.newsManagement, component: NewsManagement, layout: DefaultLayout },
    { path: config.routes.gameManagement, component: GameManagement, layout: DefaultLayout },
    { path: config.routes.shopManagement, component: ShopManagement, layout: DefaultLayout },

    //News
    { path: config.routes.editNews, component: EditNews, layout: DefaultLayout },

    //Game
    { path: config.routes.game1, component: FirstGame, layout: DefaultLayout },
    { path: config.routes.serverGame, component: ServerGame, layout: DefaultLayout },

    //User
    { path: config.routes.user, component: User, layout: UserLayout },


    //Cong add
    //Login
    { path: config.routes.home, component: UserLogin, layout: LoginLayout },

    //Download
    { path: config.routes.dow, component: UserDow, layout: LoginLayout },

    //Update
    { path: config.routes.update, component: UserUpdate, layout: LoginLayout },

    //Game
    { path: config.routes.game, component: UserGame, layout: LoginLayout },
];

const privateRoutes = () => {
    const role = localStorage.getItem('user');
    return role === 'admin' ? <Outlet /> : <Navigate to="/" />;
};

export { publicRoutes, privateRoutes };
