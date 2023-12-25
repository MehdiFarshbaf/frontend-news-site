import {createContext, useState} from "react";
import http from '../helper/API'
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {setLocale} from "yup";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const [profile, setProfile] = useState({})
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [allNews, setAllNews] = useState([])
    const navigate = useNavigate()

    const login = async (values) => {
        try {
            const {data} = await http.post("/users/login", values)
            toast.success(data.message)
            localStorage.setItem("token", data.token)
            await setProfile(data.user)
            navigate("/dashboard")
        } catch (err) {
            console.log("run catch")
            console.log(err)
        }
    }

    const getAllUsers = async () => {
        try {
            const {data} = await http.get("/users")
            if (data.success) {
                console.log(data.users)
            }
        } catch (err) {
            console.log(err)
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
            setLoading(false)
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
            setLoading(false)
        }
    }
    const getAllNews = async () => {
        try {
            const {data} = await http.get("/news")
            setAllNews(data.news)
            setLoading(false)
        } catch (err) {
            console.log(err)
            setLoading(false)
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
            setLoading(false)
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
            console.log(err)
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
            console.log(err)
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
            console.log(err)
            setLoading(false)
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
            console.log(err)
            setLoading(false)
        }
    }
    // end crud category


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
                createCategory
            }}>
            {children}
        </AuthContext.Provider>
    )
}