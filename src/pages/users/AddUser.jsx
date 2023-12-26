import {useContext} from "react";
import {AuthContext} from "../../context/context";
import {useLocation, useParams} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";

const userSchema = Yup.object({
    firstName: Yup.string().required("نام الزامی است."),
    lastName: Yup.string().required("نام خانوادگی الزامی است."),
    email: Yup.string().required("ایمیل الزامی است."),
    password: Yup.string().required("گذرواژه الزامی است."),
    confPassword: Yup.string().required("تکرار گذرواژه الزامی است."),
    isAdmin: Yup.string().required("انتخاب نقش الزامی است.")
})
const AddUser = () => {

    const {loading, createUser, updateUser} = useContext(AuthContext)
    const location = useLocation()
    const {state} = location
    const {id} = useParams()

    const formik = useFormik({
        initialValues: {
            firstName: id ? state.firstName : "",
            lastName: id ? state.lastName : "",
            email: id ? state.email : "",
            password: "",
            confPassword: "",
            isAdmin: id ? (state.isAdmin ? 1 : 0) : null
        },
        onSubmit: values => id ? updateUser(id, values) : createUser(values),
        validationSchema: userSchema
    })
    return (
        <div className="main">
            <form onSubmit={formik.handleSubmit}>
                <div className="field">
                    <label className="label">نام</label>
                    <div className="control">
                        <input type="text"
                               value={formik.values.firstName}
                               onChange={formik.handleChange("firstName")}
                               onBlur={formik.handleBlur("firstName")}
                               placeholder='نام' className="input"/>
                        <p className="help has-text-danger">{formik.touched.firstName && formik.errors.firstName}</p>
                    </div>
                </div>
                <div className="field">
                    <label className="label">نام خانوادگی</label>
                    <div className="control">
                        <input type="text" placeholder='نام خانوادگی'
                               value={formik.values.lastName}
                               onChange={formik.handleChange("lastName")}
                               onBlur={formik.handleBlur("lastName")}
                               className="input"/>
                        <p className="help has-text-danger">{formik.touched.lastName && formik.errors.lastName}</p>
                    </div>
                </div>
                <div className="field">
                    <label className="label">ایمیل</label>
                    <div className="control">
                        <input type="email" placeholder='ایمیل'
                               value={formik.values.email}
                               onChange={formik.handleChange("email")}
                               onBlur={formik.handleBlur("email")}
                               className="input"/>
                        <p className="help has-text-danger">{formik.touched.email && formik.errors.email}</p>
                    </div>
                </div>
                <div className="field">
                    <label className="label">گذرواژه</label>
                    <div className="control">
                        <input type="password" placeholder='گذرواژه'
                               value={formik.values.password}
                               onChange={formik.handleChange("password")}
                               onBlur={formik.handleBlur("password")}
                               className="input"/>
                        <p className="help has-text-danger">{formik.touched.password && formik.errors.password}</p>
                    </div>
                </div>
                <div className="field">
                    <label className="label">تکرار گذرواژه</label>
                    <div className="control">
                        <input type="password" placeholder='تکرار گذرواژه'
                               value={formik.values.confPassword}
                               onChange={formik.handleChange("confPassword")}
                               onBlur={formik.handleBlur("confPassword")}
                               className="input"/>
                        <p className="help has-text-danger">{formik.touched.confPassword && formik.errors.confPassword}</p>
                    </div>
                </div>
                <div className="field">
                    <label className="label">نقش</label>
                    <div className="control">
                        <div className="select is-fullwidth">
                            <select
                                value={formik.values.isAdmin}
                                onChange={formik.handleChange("isAdmin")}
                                onBlur={formik.handleBlur("isAdmin")}
                            >
                                <option>انتخاب نقش</option>
                                <option value="0">نویسنده</option>
                                <option value="1">مدیر</option>
                            </select>
                            <p className="help has-text-danger">{formik.touched.isAdmin && formik.errors.isAdmin}</p>
                        </div>
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
export default AddUser