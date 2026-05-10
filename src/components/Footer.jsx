import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-gray">About Us</span>
        <br></br>
        <br></br>
        <span className="text-muted">
          We provide simple and reliable solutions to improve your daily digital
          experience. Built with a focus on quality, performance, and user
          satisfaction. Helping users identify genuine products using modern
          technology.
        </span>
        <div className="mt-5 d-flex justify-content-center">
          <span className="text-muted">
            <Link to="/" className="links text-muted">
              Home
            </Link>
            |
            <Link to="/men" className="links text-muted">
              Mens Collection
            </Link>
            |
            <Link to="/women" className="links text-muted">
              Womens Collection
            </Link>
            |
            <Link to="/kids" className="links text-muted">
              Kids Collection
            </Link>
          </span>
        </div>
        <div className="mt-5 d-flex justify-content-center">
          © 2026 shopy Collections. All rights reserved. Designed and developed
          with care.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
