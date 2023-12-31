import {Link} from "react-router-dom";
import './news.css'
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/context";

const NewsList = () => {

    const {getAllNews, allNews, deleteNews} = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)
    const [newsId, setNewsId] = useState(null)
    const handleShowModal = async (id) => {
        await setNewsId(id)
        setShowModal(true)
    }

    const handleDeleteNews = async () => {
        await deleteNews(newsId)
        setShowModal(false)
    }
    useEffect(() => {
        getAllNews()
    }, []);

    return (
        <div className="main">
            <div className="is-flex is-justify-content-end">
                <Link to="/dashboard/add-news" className="button is-success px-6 mb-6">افزودن خبر</Link>
            </div>
            <table className="table is-fullwidth">
                <thead className="is-fullwidth">
                <tr>
                    <th>شماره</th>
                    <th>عنوان</th>
                    <th>نویسنده</th>
                    <th>دسته بندی</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                </tr>
                </thead>
                <tbody>
                {allNews && allNews.map((news, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{news.title}</td>
                        <td>{news.user.fullName}</td>
                        <td>{news.category.name}</td>
                        <td>
                            <Link to={`/dashboard/edit-news/${news.id}`} state={news}
                                  className="button is-success">ویرایش</Link>
                        </td>
                        <td>
                            <button className="button is-danger" onClick={() => handleShowModal(news.id)}>حذف</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showModal && <div className="modal-overlay">
                <div className="modal-news has-text-centered">
                    <h1>آیا از حذف خبر مطمئنید؟</h1>
                    <button className="button is-danger ml-3" onClick={() => handleDeleteNews()}>بله</button>
                    <button className="button is-success" onClick={() => setShowModal(false)}>خیر</button>
                </div>
            </div>}
        </div>
    )
}
export default NewsList