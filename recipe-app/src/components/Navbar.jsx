import {Link} from 'react-router-dom';

function Navbar(props) {
    return(
        <div className="Navbar" style={{"display":"flex","justifyContent":"space-evenly"}} >
            <Link to="/home">App Title</Link>
            <Link to="/favorite">Favorites</Link>
            <Link to="/aboutus">About Us</Link>
        </div>
    );
}


export default Navbar;