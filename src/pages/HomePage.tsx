import React from "react";
import { Link } from "react-router-dom";
import HomePageImage from "../assets/images/home-page.jpg";

interface Props extends React.ComponentProps<'div'> {

}

const HomePage = ({ ...props }: Props) => {
    return (
        <div>
            <div className="container p-4">
                <h1 className="fw-bold text-center py-3">Find the Perfect Van Rental for Your Next Adventure!</h1>
                <p className="fs-5 m-0 text-center">
                    Looking for the perfect van for your next adventure?
                    <br />
                    Look no further - our website offers a wide selection of vans for rent to suit all your needs.
                    <br />
                    <Link to='/vans' className="text-danger px-1">
                        Book now
                    </Link>
                    and hit the road in style!
                </p>
            </div>
            <div 
                style={{
                    backgroundImage: `url(${HomePageImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height:'60vh'
                }}
            />
            <div className="d-flex justify-content-center pt-4">
                <Link to='/vans'>
                    <button className="btn btn-outline-danger rounded-0 px-4 fw-bold fs-5">
                        Find your Van
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;