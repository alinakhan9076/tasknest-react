import { Link } from "react-router-dom";
function Navbar({ title }) {
    return(
        <nav>
            {title}

            <Link to="/">Home</Link>
            <Link to="/stats">Stats</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    );
}

export default Navbar;