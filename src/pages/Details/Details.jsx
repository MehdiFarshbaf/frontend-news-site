import Content from "../../components/Content/Content";
import Comment from "../../components/Comment/Comment";
import LeftSide from "../../components/LeftSide/LeftSide";

const Details = () => {
    return (
        <div className="details">
            <div className="container">
                <div className="columns">
                    <div className="column is-two-thirds"><Content/></div>
                    <div className="column is-one-third"><LeftSide/></div>
                </div>
            </div>
        </div>
    )
}
export default Details