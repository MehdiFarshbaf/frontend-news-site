import './auth.css'
import {useFormik} from "formik";
import * as Yup from 'yup'
import {useContext} from "react";
import {AuthContext} from "../../context/context";

const loginSchema = Yup.object({
    email: Yup.string().required("ایمیل الزامی است."),
    password: Yup.string().required("گذرواژه الزامی است.")
})
const Login = () => {

    const {login} = useContext(AuthContext)
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: loginSchema,
        onSubmit: values => login(values)
    })
    
    return (
        <section className="hero has-background-grey-light is-fullheight is-fullwidth">
            <div className="background-overlay"></div>
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-4">
                            <form className="box" onSubmit={formik.handleSubmit}>
                                <h1 className="title has-text-centered-desktop mb-5">ورود به پنل مدیریت</h1>
                                <div className="field">
                                    <label className="label">ایمیل</label>
                                    <div className="control">
                                        <input type="email" value={formik.values.email}
                                               onChange={formik.handleChange("email")}
                                               onBlur={formik.handleBlur("email")}
                                               placeholder="ایمیل شما"
                                               className="input"/>
                                        <p className="has-text-danger help">{formik.touched.email && formik.errors.email}</p>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">گذرواژه</label>
                                    <div className="control">
                                        <input type="password" placeholder="گذرواژه"
                                               value={formik.values.password}
                                               onChange={formik.handleChange("password")}
                                               onBlur={formik.handleBlur("password")}
                                               className="input"/>
                                        <p className="has-text-danger help">{formik.touched.password && formik.errors.password}</p>
                                    </div>
                                </div>
                                <div className="field mt-5">
                                    <button type="submit" className="button is-success is-fullwidth">ورود</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Login