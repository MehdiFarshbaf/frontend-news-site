import TopMenu from "../../components/TopMenu/TopMenu";
import Navbar from "../../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="wrapped">
            <TopMenu/>
            <Navbar/>
            <Outlet/>
        </div>
    )
}
export default MainLayout