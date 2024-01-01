import {BsArrowReturnLeft} from "react-icons/bs";

const CommentList = () => {
    return (
        <div className="comment-list mt-5">
            <div className="box">
                <div className="name is-size-5">مهدی</div>
                <div className="subject has-text-grey">
                    <div className="pr-2 mt-2"><BsArrowReturnLeft/></div>
                    <span className="pr-4 is-size-6 pt-1">موضوع فلان</span>
                </div>
                <div className="desc pt-4"><p className="">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                </p></div>
            </div>
        </div>
    )
}
export default CommentList