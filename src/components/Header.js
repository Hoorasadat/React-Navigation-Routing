import "./Header.css";
import logo from "../assets/logo.png";

import { Link } from 'react-router-dom';


const Header = () =>{
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </ul>
            </nav>
            <h1>My Todo List</h1>
            <img src={logo} alt="logo" />
        </header>
    );
}

export default Header;
