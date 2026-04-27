import { Link } from "react-router-dom";

export default function Navbar(){
    return(<nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-brand">
                <Link to="/">Vintage Store</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-links">Home</Link>
                <Link to="/checkout" className="navbar-links">Cart</Link>  
            </div>
            <div className="navbar-auth">
                <div className="navbar-auth-links">
                    <Link to="/auth" className="btn btn-secondary">Login</Link>
                    <Link to="/auth" className="btn btn-primary">Sign up</Link>
                </div>
            </div>
        </div>
    </nav>)
}