import styles from './Foote.module.scss'
import PostFooter from "./PostFooter/PostFooter";

const Footer = () => {
    return (
        <footer className={`${styles.footer} mt-6`}>
            <div className="container">
                <div className="columns">
                    <div className="column is-one-third">
                        <img src={require("../../assets/images/traveling.jpg")} width="270" alt=""/>
                    </div>
                    <div className="column is-one-third">
                        <h1 className={`subtitle ${styles.title}`}>محبوب ترین خبرها</h1>
                        <ul>
                            <li className="mt-4"><PostFooter/></li>
                        </ul>
                    </div>
                    <div className={`${styles.description} column is-one-third`}>
                        <div className="footer-logo">
                            <img src={require("../../assets/images/logo.png")} alt=""/>
                        </div>
                        <div className="footer-desc mt-5">
                            <p>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
                                است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
                                فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای
                                زیادی در شص</p>
                        </div>
                        <p className="pt-6">تهران خیابان تهران کوچه 5 پلاک 38</p>
                        <p className="phone pt-6">تلفن : 09039067633</p>
                    </div>
                </div>
                <div className="columns mt-6 is-flex is-justify-content-center">
                    <p>تمامی حقوق مادی و معنوی سایت متعلق به خودمان است.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer