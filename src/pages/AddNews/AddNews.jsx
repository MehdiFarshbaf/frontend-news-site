import * as Yup from 'yup'
import {useFormik} from "formik";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/context";
import {useParams, useLocation} from "react-router-dom";

const newSchema = Yup.object({
    title: Yup.string().required("عنوان خبر الزامی است."),
    desc: Yup.string().required("متن خبر الزامی است."),
    catId: Yup.string().required("انتخاب دسته بندی الزامی است.")
})

const AddNews = () => {

    const [file, setFile] = useState([])
    const [preview, setPreview] = useState(null)
    const location = useLocation()
    const {state} = location
    const {id} = useParams()

    const {getAllCategory, categories, createNews, loading, updateNews} = useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
            title: id ? state.title : "",
            desc: id ? state.desc : "",
            catId: id ? state.catId : ""
        },

        onSubmit: values => {
            const data = {...values, file}
            if (id) {
                updateNews(id, data)
            } else {
                createNews(data)
            }
        },
        validationSchema: newSchema

    })

    const loadImage = e => {
        const image = e.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    useEffect(() => {
        getAllCategory()
    }, []);


    return (
        <div className="main">
            <form onSubmit={formik.handleSubmit}>
                <div className="field">
                    <label className="label">عنوان خبر</label>
                    <div className="control">
                        <input type="text"
                               value={formik.values.title}
                               onChange={formik.handleChange("title")}
                               onBlur={formik.handleBlur("title")}
                               placeholder="عنوان خبر" className="input"/>
                        <p className="help has-text-danger">{formik.touched.title && formik.errors.title}</p>
                    </div>
                </div>
                <div className="field">
                    <label className="label">متن خبر</label>
                    <div className="control">
                        <textarea placeholder="عنوان خبر"
                                  value={formik.values.desc}
                                  onChange={formik.handleChange("desc")}
                                  onBlur={formik.handleBlur("desc")}
                                  className="textarea"/>
                        <p className="help has-text-danger">{formik.touched.desc && formik.errors.desc}</p>

                    </div>
                </div>
                <div className="field">
                    <label className="label">دسته بندی خبر</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select
                                value={formik.values.catId}
                                onChange={formik.handleChange("catId")}
                                onBlur={formik.handleBlur("catId")}
                            >
                                {categories.map(category => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                            <p className="help has-text-danger">{formik.touched.catId && formik.errors.catId}</p>

                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">عکس خبر</label>
                    <div className="control">
                        <input onChange={loadImage} type="file" className="input"/>
                        {preview ?
                            <img className="mt-5 has-shadow image" src={preview} width="250" alt=""/>
                            :
                            <img className="mt-5 has-shadow image" src={state?.url} width="250" alt=""/>
                        }
                    </div>
                </div>
                <div className="field mt-6">
                    <div className="control">
                        <button type="submit" disabled={loading}
                                className="button is-success px-6">{id ? "ویرایش" : "ذخیره"}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddNews