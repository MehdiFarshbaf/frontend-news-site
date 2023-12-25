import axios from "axios";
import {toast} from "react-toastify";
import {history} from "./myHistory";


axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
axios.defaults.headers.common['Content-Type'] = "multipart/form-data"
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

        console.log(err.response.status)
        switch (err.response.status) {
            case 401:
                toast.error(err.response.data.message)
                history.push("/admin")
                localStorage.removeItem("token")
                break
            case 422:
                toast.error(err.response.data.message)
                break
            case 404:
                toast.error(err.response.data.message)
                break
        }
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