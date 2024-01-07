import {createContext, useState} from "react";
import http from '../helper/API'
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [profile, setProfile] = useState(null)
    const [videos, setVideos] = useState([])
    const [users, setUsers] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [allNews, setAllNews] = useState([])
    const navigate = useNavigate()


     const handleShowErrorMessage = async (error) => {
        console.log(error)
        if (error.status === 422 && error.data.errors) {
            const keys = Object.keys(error.data.errors)
            toast.error(error.data.errors[keys[0]][0])
        }
        toast.error(error.data.message)
        await setLoading(false)
    }
    const login = async (values) => {
        try {
            const {data} = await http.post("/users/login", values)
            toast.success(data.message)
            localStorage.setItem("token", data.token)
            await getProfile()
            navigate("/dashboard")
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }

    // start new crud
    const createNews = async (newData) => {
        setLoading(true)
        const formData = new FormData()
        formData.append("title", newData.title)
        formData.append("desc", newData.desc)
        formData.append("catId", newData.catId)
        formData.append("file", newData.file)
        try {
            const {data} = await http.post("/news", formData)
            if (data.success) {
                toast.success(data.message)
                setLoading(false)
                navigate("/dashboard/news")
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }

    const updateNews = async (id, newsData) => {
        setLoading(true)
        const formData = new FormData()
        formData.append("title", newsData.title)
        formData.append("desc", newsData.desc)
        formData.append("catId", newsData.catId)
        if (newsData.file) {
            formData.append("file", newsData.file)
        }
        try {
            const {data} = await http.put(`/news/${id}`, formData)
            if (data.success) {
                toast.success(data.message)
                setLoading(false)
                navigate("/dashboard/news")
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }
    const getAllNews = async () => {
        try {
            const {data} = await http.get("/news")
            setAllNews(data.news)
            setLoading(false)
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }

    const deleteNews = async newsId => {
        try {
            const {data} = await http.delete(`/news/${newsId}`)
            if (data.success) {
                toast.success(data.message)
                await getAllNews()
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }
    // end new crud

    // start crud category
    const getAllCategory = async () => {
        try {
            const {data} = await http.get("/category")
            if (data.success) {
                await setCategories(data.categories)
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }
    const deleteCategory = async categoryId => {
        try {
            const {data} = await http.delete(`/category/${categoryId}`)
            if (data.success) {
                toast.success(data.message)
                await getAllCategory()
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }
    const createCategory = async (values) => {
        try {
            const {data} = await http.post("/category", values)
            if (data.success) {
                toast.success(data.message)
                navigate("/dashboard/category")
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }
    const updateCategory = async (id, values) => {
        try {
            const {data} = await http.put(`/category/${id}`, values)
            if (data.success) {
                toast.success(data.message)
                navigate("/dashboard/category")
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }
    // end crud category

    // start crud video
    const createVideo = async (videoData) => {
        setLoading(true)
        const formData = new FormData()
        formData.append("file", videoData.file)
        try {
            const {data} = await http.post("/video", formData)
            if (data.success) {
                toast.success(data.message)
                setLoading(false)
                navigate("/dashboard/video")
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }
    const getAllVideos = async () => {
        try {
            const {data} = await http.get("/video")
            await setVideos(data.videos)
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }
    const deleteVideo = async videoId => {
        try {
            const {data} = await http.delete(`/video/${videoId}`)
            if (data.success) {
                toast.success(data.message)
                await getAllVideos()
                setLoading(false)
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }

    // end crud video

    // start crud user
    const getAllUsers = async () => {
        try {
            const {data} = await http.get("/users")
            await setUsers(data.users)
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }

    const createUser = async userData => {
        try {
            const {data} = await http.post("/users/register", userData)
            if (data.success) {
                toast.success(data.message)
                setLoading(false)
                navigate("/dashboard/users")
            }
            setLoading(false)
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }

    const handleLogout = async () => {
        localStorage.removeItem("token")
        await setProfile(null)
        toast.success("خروج موفقیت آمیز بود.")
        navigate("/")
    }
    const updateUser = async (id, values) => {
        setLoading(true)
        try {
            const {data} = await http.put(`/users/${id}`, values)
            if (data.success) {
                toast.success(data.message)
                navigate("/dashboard/users")
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }

    const deleteUser = async (userId) => {
        setLoading(true)
        try {
            const {data} = await http.delete(`/users/${userId}`)
            if (data.success) {
                toast.success(data.message)
                setLoading(false)
                await getAllUsers()
            }
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }

    const getProfile = async () => {
        setLoading(true)
        try {
            const {data} = await http.get("/users/get-profile")
            if (data.success) {
                await setProfile(data.profile)
                await setLoading(false)
            }
            setLoading(false)
        } catch (err) {
            await handleShowErrorMessage(err)
        }
    }
    const updateProfile = async (values) => {

        // setLoading(true)
        try {
            const res = await http.put(`/users/profile`, values)
            if (res) {
                toast.success("ویرایش پروفایل موفقیت آمیز بود. ")
                await getProfile()
                navigate("/dashboard")
                setLoading(false)
            }
        } catch (err) {
            console.log(err)
            // await handleShowErrorMessage(err)
        }
    }
    // end crud user

    return (
        <AuthContext.Provider
            value={{
                login,
                getAllUsers,
                getAllCategory,
                categories,
                createNews,
                loading,
                getAllNews,
                allNews,
                deleteNews,
                updateNews,
                deleteCategory,
                updateCategory,
                createCategory,
                createVideo,
                getAllVideos,
                videos,
                deleteVideo,
                users,
                createUser, profile, handleLogout, setProfile, updateUser, deleteUser, updateProfile, getProfile
            }}>
            {children}
        </AuthContext.Provider>
    )
}