import styles from './PopularItem.module.scss'
import {Link} from "react-router-dom";
import {BsEye} from "react-icons/bs";

const PopularItem = () => {
    return (
        <div className="column popular-news">
            <div className={styles.containerImage}>
                <Link to="#">
                    <img src={require("../../assets/images/1.jpeg")} className={styles.imagePopularItem} alt=""/>
                </Link>
                <div className={styles.numViews}>
                    <span><BsEye/>167</span>
                </div>
            </div>
            <div className="popular-title">
                <h6 className="is-flex has-text-weight-bold is-size-5"><Link to="/">تست تایتل</Link></h6>
            </div>
            <div className="auther has-text-grey mt-4">
                <span className="is-size-6 ml-2">19/5/85</span>
                <span className="is-size-6 mr-2">مهدی فرشباف</span>
            </div>
        </div>
    )
}
export default PopularItem