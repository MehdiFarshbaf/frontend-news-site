import Sidebar from "../../components/Sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import Information from "../../components/Information/Information";

const DashboardLayout = () => {
    return (
        <div className="dashboard-wrapper">
            <Sidebar/>
            <div className="main-info">
                <Information/>
                <div className="main">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}
export default DashboardLayout