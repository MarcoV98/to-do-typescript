import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="main-nav">
            <ul className="main-nav__list">
                <li className="main-nav__item">
                    <Link to="/">Your Task</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="/accessible">Accessible Text</Link>
                </li>
                <li className="main-nav__item">
                    <Link to="/credits">Credits</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
