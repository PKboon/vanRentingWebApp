import AboutPageImage from '../assets/images/about-page.jpg';
import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <div className="pt-4 bg-light">
            <h2 className="fw-bold text-center pb-3">About Us</h2>
            <p className="container fs-5 p-4">
                Our website is dedicated to providing an easy and convenient way for customers to rent vans for any purpose. With a wide selection of vehicles available for short or long-term rental, we aim to meet the diverse needs of individuals and businesses alike. Our user-friendly interface and transparent pricing make the rental process seamless, ensuring a hassle-free experience for our customers.
                <br />
                <br /> 
                Thank you for considering us for your van rental needs.
            </p>
            <div className="d-flex justify-content-center pb-4 mb-3">
                <Link to='/vans'>
                    <button className="btn btn-outline-danger rounded-0 px-4 fw-bold fs-5">
                        Find your Van
                    </button>
                </Link>
            </div>
            <div
                style={{
                    backgroundImage: `url(${AboutPageImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '53.85vh'
                }}
            />
        </div>
    );
}

export default AboutPage;