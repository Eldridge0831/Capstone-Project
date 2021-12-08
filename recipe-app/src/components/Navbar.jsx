import React from 'react';
import {Link} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import AuthButton from './AuthButton';
function Navbar() {
    return(
        <div className="Navbar" style={{"display":"flex","justifyContent":"space-evenly"}} >
            
            <Link to="/home">App Title</Link>
            <Link to="/favorite">Favorites</Link>
            <Link to="/aboutus">About Us</Link>
            
            <Link to="/login" style={{ textDecoration: "none" }} className="nav-link">
                Login
              </Link>
              <AuthButton />
              {/* <Link to="/login" style={{ textDecoration: "none" }} className="nav-link">
                Login
              </Link> */}

              
        </div>
    );
}


export default Navbar;