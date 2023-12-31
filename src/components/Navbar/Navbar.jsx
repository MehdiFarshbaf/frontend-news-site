import './navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="has-background-danger py-5 my-4">
            <div className="container">
                <div className="nav">
                    <ul className="is-flex nav-ul">
                        <li><Link to="/">خانه</Link></li>
                        <li><Link to="/about-us">درباره ما</Link></li>
                        <li><Link to="/contact-us">تماس با ما</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Navbar