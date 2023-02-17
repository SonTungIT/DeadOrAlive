import config from "../config";
import { Login } from "../Authenticated/Login";
import { Register } from "../Authenticated/Register";

const publicRoutes = [
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.register,
        component: Register,
    }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };