import axiosClient from "./axiosClient";

const productApi = {
    getAll(params) {
        const url = '/getAllGameServer?gameName=Dead%20of%20souls';
        return axiosClient.get(url, { params });
    }
}

export default productApi;