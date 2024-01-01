import styles from "./PostFooter.module.scss"
import {Link} from "react-router-dom";

const PostFooter = () => {
    return (
        <div className={styles.container}>
            <div className="">
                <Link to=""><img src={require("../../../assets/images/1.jpeg")} alt=""/></Link>
            </div>
            <div>
                <Link to=""><h1 className={styles.title} >test title</h1></Link>
                <Link to="" className={styles.name}><h1>مهدی</h1></Link>
            </div>

        </div>
    )
}
export default PostFooter