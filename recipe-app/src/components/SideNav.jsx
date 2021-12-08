import React from 'react';
import {Link} from 'react-router-dom';

function SideNav() {
    return(
        <div className="Navbar" style={{"display":"flex","justifyContent":"space-evenly"}} >
            
            <Link to="/search">Recipe Search</Link>
            <Link to="/nutrition">Nutrition Data</Link>
            {/* <Link to="/aboutus">Information on Diets</Link> */}
        </div>
    );
}


export default SideNav;