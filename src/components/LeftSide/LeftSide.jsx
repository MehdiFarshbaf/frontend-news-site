import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon} from 'react-share'
import {useParams} from "react-router-dom";
import styles from './LeftSide.module.scss'

const LeftSide = () => {

    const {id} = useParams()
    const shareUrl = `https://www.localhost:3000/detail/${id}`

    return (
        <div className={styles.leftSide}>
            <div className={`${styles.socialMedia} has-background-white p-5`}>
                <h1 className="is-size-6 has-text-weight-bold mb-4">اشتراک گذاری</h1>
                <FacebookShareButton url={shareUrl}><FacebookIcon round size={40}/></FacebookShareButton>
                <TwitterShareButton url={shareUrl}><TwitterIcon round size={40}/></TwitterShareButton>
            </div>
            <div className="detail-ads mt-5 has-text-centered">
                <img src={require("../../assets/images/news_card.jpg")} width={250} alt=""/>
            </div>
        </div>
    )
}
export default LeftSide