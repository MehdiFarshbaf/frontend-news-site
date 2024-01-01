import {Routes, Route} from 'react-router-dom'
import Login from "./pages/Login/Login";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import NewsList from "./pages/News/NewsList";
import Home from "./pages/Home/Home";
import DashboardLayout from "./Layouts/DashboardLayout/DashboardLayout";
import AddNews from "./pages/AddNews/AddNews";
import CategoryList from "./pages/CategoryList/CategoryList";
import AddCategory from "./pages/AddCategory/AddCategory";
import Video from "./pages/Video/Video";
import AddVideo from "./pages/Video/AddVideo";
import UsersList from "./pages/users/UsersList";
import AddUser from "./pages/users/AddUser";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Profile from "./pages/Profile/Profile";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Details from "./pages/Details/Details";


const App = () => {
    return (
        <ScrollToTop>
            <Routes>
                <Route path="/admin" element={<Login/>}/>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                    <Route path="/contact-us" element={<ContactUs/>}/>
                    <Route path="/details/:id" element={<Details/>}/>
                </Route>

                <Route path="/dashboard" element={<DashboardLayout/>}>
                    <Route index element={<Dashboard/>}/>

                    <Route path="/dashboard/profile" element={<Profile/>}/>

                    <Route path="/dashboard/video" element={<Video/>}/>
                    <Route path="/dashboard/add-video" element={<AddVideo/>}/>

                    <Route path="/dashboard/users" element={<UsersList/>}/>
                    <Route path="/dashboard/add-user" element={<AddUser/>}/>
                    <Route path="/dashboard/edit-user/:id" element={<AddUser/>}/>

                    <Route path="/dashboard/news" element={<NewsList/>}/>
                    <Route path="/dashboard/add-news" element={<AddNews/>}/>
                    <Route path="/dashboard/edit-news/:id" element={<AddNews/>}/>

                    <Route path="/dashboard/category" element={<CategoryList/>}/>
                    <Route path="/dashboard/add-category" element={<AddCategory/>}/>
                    <Route path="/dashboard/edit-category/:id" element={<AddCategory/>}/>
                </Route>
            </Routes>
        </ScrollToTop>
    )
}
export default App