import CommentList from "./CommentList";

const Comment = () => {
    return (
        <>
            <div className="comment mt-6 mb-6">
                <form>
                    <div className="field">
                        <textarea placeholder="نظر شما" className="textarea"/>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <input type="text" placeholder="نام شما" className="input"/>
                        </div>
                        <div className="column">
                            <input type="email" placeholder="ایمیل" className="input"/>
                        </div>
                    </div>
                    <div className="field">
                        <input type="text" placeholder="موضوع" className="input"/>
                    </div>
                    <div className="field">
                        <button className="button has-background-danger is-fullwidth mt-5 has-text-white">ارسال نظر
                        </button>
                    </div>
                </form>
            </div>
            <CommentList/>
        </>
    )
}
export default Comment