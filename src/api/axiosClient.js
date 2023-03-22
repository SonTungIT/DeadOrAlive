import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://game-rpg.herokuapp.com/api/v1/gameServer',
    headers: {
        'Content-Type': 'application/json',
    },
});

axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default axiosClient;