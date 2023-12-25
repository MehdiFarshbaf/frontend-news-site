import {useContext, useState} from "react";
import {AuthContext} from "../../context/context";
import {useFormik} from "formik";

const AddVideo = () => {

    const {loading,createVideo} = useContext(AuthContext)
    const [file, setFile] = useState(null)

    const formik = useFormik({
        initialValues: {
            file: null
        },
        onSubmit: values => {
            const data = {file}
            createVideo(data)
        }
    })
    return (
        <div className="main">
            <form onSubmit={formik.handleSubmit}>
                <div className="control">
                    <input type="file" className="input" onChange={e => setFile(e.target.files[0])}/>
                </div>
                <div className="field mt-6">
                    <div className="control">
                        <button type="submit" disabled={loading}
                                className="button is-success px-6">ذخیره
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddVideo