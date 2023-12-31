import img from "../../assets/images/1.jpeg";
import video from "../../assets/images/newsvideo.mp4";
import './homeWrapper.css'

const HomeWrapper = () => {
    return (
        <div className="home-wrapper">
            <div className="container">
                <div className="columns is-flex-widescreen is-block-tablet is-align-items-start">
                    <div className="column is-one-quarter-widescreen is-full-desktop">
                        <div className="right-side-post">
                            <div className="right-side-top">
                                <div className="right-side-img">
                                    <div className="overlay"/>
                                    <img src={img} alt=""/>
                                </div>
                                <div className="post-info">
                                    <div className="post-cat">
                                        <span>تست</span>
                                    </div>
                                    <div className="post-title">
                                        عنوان پست
                                    </div>
                                    <div className="post-date">تاریخ</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-three-quarters-widescreen is-full-tablet">
                        <div className="post-left-side">
                            <video src={video} width="100%" height="100%" controls/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeWrapper