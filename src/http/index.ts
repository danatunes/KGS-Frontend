import axios from 'axios';

export const API_URL = `http://localhost:8000`

const $api = axios.create({
    //SHOULD BE : true
    withCredentials: false,
    baseURL: API_URL
});

$api.interceptors.request.use(config => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    console.log(config)
    return config;
});

export default $api;