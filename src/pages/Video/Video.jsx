import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import {AuthContext} from "../../context/context";

const Video = () => {

    const {getAllVideos, videos, deleteVideo} = useContext(AuthContext)

    useEffect(() => {
        getAllVideos()
    }, []);

    return (
        <div className="main">
            <div className="is-flex is-justify-content-end">
                <Link to="/dashboard/add-video" className="button is-success px-6 mb-6">افزودن ویدیو</Link>
            </div>
            <table className="table is-fullwidth">
                <thead className="is-fullwidth">
                <tr>
                    <th>شماره</th>
                    <th>ویدیو</th>
                    <th>حذف</th>
                </tr>
                </thead>
                <tbody>
                {videos && videos.map((video, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <video src={video.url} controls width="200"></video>
                        </td>
                        <td>
                            <button onClick={() => deleteVideo(video.id)} className="button is-danger">حذف</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
export default Video