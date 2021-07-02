import axios from "axios"
// import { history } from "../Routes/history"

const instance = axios.create({
    baseURL: `http://192.168.1.26:3001/`,
    // baseURL: `http://192.168.1.31:3000/`,
})

instance.interceptors.request.use(
    (config) => {
        const isAuthenticated = () => {
            const urlSearchParams = new URLSearchParams(window.location.search);
            return urlSearchParams.get('token');
        }
        // return localStorage.getItem(`token`)
        // const isAuthenticated = () => localStorage.getItem("token")
        config.headers.Accept = "application/json";
        // config.headers.Authorization = `${process.env.REACT_APP_TOKEN}`
        // config.headers.Authorization = `${await isAuthenticated()}`
        config.headers["x-card-key"] = `${isAuthenticated()}`;
        config.headers["Content-Type"] = "application/json";
        return config
    },
    error => Promise.reject(error)
)

instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (
            error.response.status === 401
        ) {
            // localStorage.clear()
            // history.push("/login")
            // return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default instance
