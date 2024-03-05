import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="d-flex justify-content-between align-items-center py-2 px-4 bg-light">
            <Link to='/' className="text-decoration-none">
                <h2 className="fw-bold text-danger">VanRenting</h2>
            </Link>
            <div className="d-flex gap-3">
                <Link to='/about' className="text-dark text-decoration-none">
                    About
                </Link>
                <Link to='/vans' className="text-dark text-decoration-none">
                    Vans
                </Link>
            </div>
        </header>
    );
}

export default NavBar;