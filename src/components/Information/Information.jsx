import './information.css'
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.png'
import {BsChatDots, BsFillCapslockFill, BsFillPersonPlusFill} from "react-icons/bs";
import {useContext} from "react";
import {AuthContext} from "../../context/context";

const Information = () => {
    const {profile} = useContext(AuthContext)
    return (
        <div className="information">
            <div className="view-web is-flex is-align-items-center is-justify-content-space-between mb-5">
                <div className="view-webpage">
                    <a href="/" className="button has-background-success has-text-white">مشاهده وب سایت</a>
                </div>
                <div className="view-profile">
                    <span>
                        <Link to="/dashboard/profile"><img className="image profile-photo"
                                                           src={profile?.url ? profile?.url : logo} alt=""/></Link>
                    </span>
                </div>
            </div>
            <div className="info">
                <div className="info-item">
                    <h4>خبرها</h4>
                    <span>16</span>
                    <BsFillCapslockFill/>
                </div>
                <div className="info-item">
                    <h4>کاربران</h4>
                    <span>8</span>
                    <BsFillPersonPlusFill/>
                </div>
                <div className="info-item">
                    <h4>نظرات</h4>
                    <span>120</span>
                    <BsChatDots/>
                </div>
            </div>
        </div>
    )
}
export default Information