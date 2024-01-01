import * as Yup from 'yup'
import {useFormik} from "formik";

const ContactUs = () => {

    const formSchema = Yup.object({
        email: Yup.string().required("ایمیل الزامی است.").email("ایمیل وارد شده معتبر نمیباشد."),
        subject: Yup.string().required("عنوان الزامی است."),
        message: Yup.string().required("پیام الزامی است.")
    })

    const formik = useFormik({
        initialValues: {
            email: "",
            subject: "",
            message: ""
        },
        onSubmit: values => console.log(values),
        validationSchema: formSchema
    })

    return (
        <div className="contact-use">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <img src={require("../../assets/images/contact.webp")} alt=""/>
                    </div>
                    <div className="column">
                        <h1 className="title mb-6">ارتباط با ما</h1>
                        <div className="phone-number mb-6 is-size-5">
                            <span>تلفن تماس : </span>
                            <span>09039067633</span>
                        </div>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="field">
                                <input type="text" placeholder="موضوع" className="input"
                                       value={formik.values.subject}
                                       onChange={formik.handleChange("subject")}
                                       onBlur={formik.handleBlur("subject")}
                                />
                                <p className="help has-text-danger">{formik.touched.subject && formik.errors.subject}</p>
                            </div>
                            <div className="field">
                                <input type="text" placeholder="ایمیل" className="input"
                                       value={formik.values.email}
                                       onChange={formik.handleChange("email")}
                                       onBlur={formik.handleBlur("email")}
                                />
                                <p className="help has-text-danger">{formik.touched.email && formik.errors.email}</p>
                            </div>
                            <div className="field">
                                <textarea rows="10" className="textarea" placeholder="متن"
                                          value={formik.values.message}
                                          onChange={formik.handleChange("message")}
                                          onBlur={formik.handleBlur("message")}
                                />
                                <p className="help has-text-danger">{formik.touched.message && formik.errors.message}</p>
                            </div>
                            <div className="field">
                                <button className="button is-success px-6" type="submit">ارسال</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs