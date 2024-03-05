import { Link } from "react-router-dom";
import HomePageImage from "../assets/images/home-page.jpg";

const HomePage = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${HomePageImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: '3rem 3rem calc(100vh - 33.15rem)'
            }}
        >
            <h1
                className="fw-bold py-3 text-light"
                style={{ fontSize: 'clamp(2rem, 100vw/10, 5rem)' }}
            >
                Find <label className="text-danger">the Perfect Van Rental</label>
                <br />
                for Your Next Adventure!
            </h1>
            <p className="fs-5 m-0 text-light">
                Looking for the perfect van for your next adventure?
                <br />
                We offer a wide selection of vans for rent to suit all your needs.
                <br />
                <strong className="me-1">
                    Book now
                </strong>
                and hit the road in style!
            </p>
            <Link to='/vans'>
                <button className="btn btn-outline-light rounded-0 px-4 fw-bold fs-1 border-5 mt-3">
                    Find your Van
                </button>
            </Link>
        </div>
    );
}

export default HomePage;