import './sidebar.css'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/context";

const Sidebar = () => {

    const {handleLogout} = useContext(AuthContext)

    return (
        <div className="sidebar">
            <div className="logo mb-5 has-text-centered">
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
            </div>
            <ul>
                <li><Link to="/dashboard">داشبورد</Link></li>
                <li><Link to="/dashboard/news">لیست خبرها</Link></li>
                <li><Link to="/dashboard/category">دسته بندی</Link></li>
                <li><Link to="/dashboard/video">ویدیو</Link></li>
                <li><Link to="/dashboard/users">کاربران</Link></li>
                <li><Link to="/dashboard"/>نظرات</li>
                <li onClick={() => handleLogout()}>خروج</li>
            </ul>
        </div>
    )
}
export default Sidebar