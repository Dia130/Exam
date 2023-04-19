import "./Style.css"
import { Outlet, Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="nav">
            <a className="left" href='/login'>
                <Link to="/login">
                    login
                </Link>
            </a>
            <a className="left" href='#'>
                Register</a>
            <a className="right" href='/home'>
                <Link to="/home">
                    Home
                </Link>
            </a>
            <a className="right" href='/about'>
                <Link to="/about">
                    About
                </Link>
            </a>
            <Outlet />
        </div>
    )
}
export default Navbar