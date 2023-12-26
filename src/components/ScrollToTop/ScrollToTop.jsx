import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/context";
import {useLocation, useNavigate} from "react-router-dom";
import http from "../../helper/API";

const ScrollToTop = ({children}) => {

    const {profile, setProfile} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation();
    const {pathname} = location


    const checkToken = async () => {
        try {
            const {data} = await http.get("/users/get-profile")
            if (data.success) {
                await setProfile(data.profile)
            }
        } catch (ex) {
            await setProfile(null)
            navigate('/')
        }
    }

    const checkLogin2 = async () => {
        try {
            const {data} = await http.get("/users/get-profile")
            if (data.success) {
                await setProfile(data.profile)
            }
        } catch (ex) {
        }
    }

    useEffect(() => {
        if (!profile) {
            if (pathname.indexOf('dashboard') > -1) {
                if (localStorage.getItem('token')) {
                    checkToken()
                } else {
                    setProfile(null)
                    navigate('/admin')
                }
            } else {
                if (localStorage.getItem("token")) {
                    checkLogin2()
                }
            }
        }
    }, [pathname]);
    return (
        <>{children}</>
    )
}
export default ScrollToTop