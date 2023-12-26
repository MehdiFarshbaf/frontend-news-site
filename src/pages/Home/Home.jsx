import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/context";

const Home = () => {
    const navigate = useNavigate()
    const {profile} = useContext(AuthContext)
    return (
        <div className="container">
            <button
                onClick={() => navigate(profile ? "/dashboard" : "/admin")}>{profile ? "dashboard" : "go login"}</button>
        </div>
    )
}
export default Home