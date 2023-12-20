import axios from "axios";
import {toast} from "react-toastify";

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
axios.defaults.baseURL = "http://localhost:8001/api"
axios.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return req;
}, null);

axios.interceptors.response.use(
    res => {
        return res
    },
    err => {
        // return err.response.data
        toast.error(err.response.data.message)
        return Promise.reject(err.response.data);
    }
)
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};