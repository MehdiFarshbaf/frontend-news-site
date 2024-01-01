import TopMenu from "../../components/TopMenu/TopMenu";
import Navbar from "../../components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="wrapped">
            <TopMenu/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default MainLayout