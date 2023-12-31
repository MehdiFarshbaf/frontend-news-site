import "./mostPopular.css"
import PopularItem from "../PopularItem/PopularItem";

const MostPopular = () => {
    return (
        <div className="container mt-6">
            <div className="columns">
                <div className="column has-background-white p-4 is-four-fifths">
                    <div className="popular mb-5">
                        <h1>محبوب ترین خبرها</h1>
                    </div>
                    <div className="columns">
                        <PopularItem/>
                        <PopularItem/>
                        <PopularItem/>
                    </div>
                </div>
                <div className="column is-one-fifth has-text-centered">
                    <img src={require("../../assets/images/traveling.jpg")} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default MostPopular