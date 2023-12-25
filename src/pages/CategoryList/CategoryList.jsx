import {Link} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/context";

const CategoryList = () => {

    const {getAllCategory, categories, deleteCategory} = useContext(AuthContext)
    const [showModal, setShowModal] = useState(false)
    const [categoryId, setCategoryId] = useState(null)
    const handleShowModal = async (id) => {
        await setCategoryId(id)
        setShowModal(true)
    }

    const handleDeleteCategory = async () => {
        await deleteCategory(categoryId)
        setShowModal(false)
    }
    useEffect(() => {
        getAllCategory()
    }, []);

    return (
        <div className="main">
            <div className="is-flex is-justify-content-end">
                <Link to="/dashboard/add-category" className="button is-success px-6 mb-6">افزودن دسته بندی</Link>
            </div>
            <table className="table is-fullwidth">
                <thead className="is-fullwidth">
                <tr>
                    <th>شماره</th>
                    <th>نام دسته بندی</th>
                    <th>ویرایش</th>
                    <th>حذف</th>
                </tr>
                </thead>
                <tbody>
                {categories && categories.map((category, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                        <td>
                            <Link to={`/dashboard/edit-category/${category.id}`} state={category}
                                  className="button is-success">ویرایش</Link>
                        </td>
                        <td>
                            <button className="button is-danger" onClick={() => handleShowModal(category.id)}>حذف
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {showModal && <div className="modal-overlay">
                <div className="modal-news has-text-centered">
                    <h1>آیا از حذف دسته بندی مطمئنید؟</h1>
                    <button className="button is-danger ml-3" onClick={() => handleDeleteCategory()}>بله</button>
                    <button className="button is-success" onClick={() => setShowModal(false)}>خیر</button>
                </div>
            </div>}
        </div>
    )
}
export default CategoryList