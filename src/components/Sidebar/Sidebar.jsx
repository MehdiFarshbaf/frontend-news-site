import './sidebar.css'
import logo from '../../assets/images/logo.png'
import {Link} from "react-router-dom";
import {useState} from "react";

const Sidebar = () => {

    const [showNews, setShowNews] = useState(false)
    return (
        <div className="sidebar">
            <div className="logo mb-5 has-text-centered">
                <img src={logo} alt=""/>
            </div>
            <ul>
                <li><Link to="/dashboard">داشبورد</Link></li>
                <li><Link to="/dashboard/news">لیست خبرها</Link></li>
                <li><Link to="/dashboard/category">دسته بندی</Link></li>
                <li><Link to="/dashboard"/>ویدیو</li>
                <li><Link to="/dashboard"/>کاربران</li>
                <li><Link to="/dashboard"/>نظرات</li>
                <li><Link to="/dashboard"/>خروج</li>
            </ul>
        </div>
    )
}
export default Sidebar