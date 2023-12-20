import {createContext, useState} from "react";
import http from '../helper/API'
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [profile, setProfile] = useState({})
    const navigate = useNavigate()

    const login = async (values) => {
        try {
            const {data} = await http.post("/users/login", values)
            toast.success(data.message)
            localStorage.setItem("token", data.token)
            await setProfile(data.user)
            navigate("/dashboard")
        } catch (err) {
            console.log("run catch")
            console.log(err)
        }
    }

    const getAllUsers = async () => {
        try {
            const {data} = await http.get("/users")
            if (data.success) {
                console.log(data.users)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{login, getAllUsers}}>
            {children}
        </AuthContext.Provider>
    )
}