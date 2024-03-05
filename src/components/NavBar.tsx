import React from "react";
import { Link } from "react-router-dom";

interface Props extends React.ComponentProps<'header'> {

}

const NavBar = ({ ...props }: Props) => {
    return (
        <header className="d-flex justify-content-between align-items-center py-2 px-4 bg-primary">
            <Link to='/' className="text-decoration-none">
                <h2 className="fw-bold text-light">VanRenting</h2>
            </Link>
            <div className="d-flex gap-3">
                <Link to='/about' className="text-light text-decoration-none">
                    About
                </Link>
                <Link to='/vans' className="text-light text-decoration-none">
                    Vans
                </Link>
            </div>
        </header>
    );
}

export default NavBar;