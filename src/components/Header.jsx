import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <ul>
            <Link to='/'><li>Homepage</li></Link>
            <Link to='/tools'><li>Tools</li></Link>
            <Link to='/mychoices'><li>My choice</li></Link>
            <Link to='/websites'><li>Websites to follow</li></Link>
            <li><a target="_blank" href="http://learn.seytech.co/">Seytech</a></li>
        </ul>
      </header>
    )
}

export default Header;