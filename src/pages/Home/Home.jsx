import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className="container">
            <button onClick={() => navigate("/admin")}>go login</button>
        </div>
    )
}
export default Home