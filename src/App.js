import {Routes, Route} from 'react-router-dom'
import Login from "./pages/Login/Login";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import NewsList from "./pages/News/NewsList";
import Home from "./pages/Home/Home";
import DashboardLayout from "./Layouts/DashboardLayout/DashboardLayout";
import AddNews from "./pages/AddNews/AddNews";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<Login/>}/>
                <Route path="/dashboard" element={<DashboardLayout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="/dashboard/news" element={<NewsList/>}/>
                    <Route path="/dashboard/add-news" element={<AddNews/>}/>
                </Route>
            </Routes>
        </>
    )
}
export default App