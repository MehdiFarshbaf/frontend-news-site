import * as Yup from "yup";
import {useLocation, useParams} from "react-router-dom";
import {useFormik} from "formik";
import {useContext} from "react";
import {AuthContext} from "../../context/context";


const newSchema = Yup.object({
    name: Yup.string().required("نام دسته بندی الزامی است.")
})

const AddCategory = () => {

    const location = useLocation()
    const {state} = location
    const {id} = useParams()

    const {updateCategory, createCategory, loading} = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            name: id ? state.name : ""
        },

        onSubmit: values => {
            if (id) {
                updateCategory(id, values)
            } else {
                createCategory(values)
            }
        },
        validationSchema: newSchema

    })
    return (
        <div className="main">
            <form onSubmit={formik.handleSubmit}>
                <div className="field">
                    <label className="label">نام دسته بندی</label>
                    <div className="control">
                        <input type="text"
                               value={formik.values.name}
                               onChange={formik.handleChange("name")}
                               onBlur={formik.handleBlur("name")}
                               placeholder="نام دسته بندی" className="input"/>
                        <p className="help has-text-danger">{formik.touched.name && formik.errors.name}</p>
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
export default AddCategory