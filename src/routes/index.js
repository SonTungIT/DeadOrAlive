import Login from '~/pages/Authenticated/Login';
import Register from '~/pages/Authenticated/Register';
import Info from '~/pages/Authenticated/Info';
import Admin from '~/pages/Home/Admin/Admin';
import { DefaultLayout } from '~/components/Layout';

const publicRoutes = [
    { path: '/login', component: Login, layout: null },
    { path: '/register', component: Register, layout: null },
    { path: '/information', component: Info, layout: null },
    { path: '/', component: Admin, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
