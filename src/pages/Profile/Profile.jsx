import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/context";
import {useFormik} from "formik";
import login from "../Login/Login";

const Profile = () => {
    const {profile, loading, updateProfile, getProfile} = useContext(AuthContext)
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const loadImage = e => {
        const image = e.target.files[0]
        setFile(image)
        setPreview(URL.createObjectURL(image))
    }

    const formik = useFormik({
        initialValues: {
            firstName: profile?.firstName,
            lastName: profile?.lastName,
        },
        onSubmit: values => {
            if (file) {
                updateProfile({...values, file})
            } else {
                updateProfile(values)
            }
        }
    })


    useEffect(() => {
        getProfile()
    }, []);

    return (
        <div className="main">
            {loading ? null : <form onSubmit={formik.handleSubmit}>
                <div className="field pt-3">
                    <label className="label">عکس پروفایل</label>
                    <div className="control">
                        <input type="file" className="input" onChange={loadImage}/>
                        {preview ? <img src={preview} alt="عکس پروفایل" width="250"/> :
                            (profile?.url && <img src={profile?.url} alt="عکس پروفایل" width="250"/>)

                        }
                    </div>
                </div>
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
                <div className="field mt-6">
                    <div className="control">
                        <button disabled={loading} className="button is-success px-6">ذخیره</button>
                    </div>
                </div>
            </form>}
        </div>
    )
}
export default Profile