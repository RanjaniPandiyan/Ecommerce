import { Link } from "react-router-dom";
import brand from "/images/brand.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={brand} alt="brand" style={{ width: 50, height: 50 }}></img>
          <b style={{ fontSize: "30px" }}>Shopy</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-4">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/products/Mens"
              >
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products/Womens">
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products/Kids">
                Kids
              </Link>
            </li>
            <li className="nav-item mt-2">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Login">
                <i
                  className="fa fa-user"
                  aria-hidden="true"
                  style={{ textDecoration: "none", color: "black" }}
                ></i>
              </Link>
            </li>
            <li className="nav-item">
              <i className="fa fa-heart-o" aria-hidden="true"></i>
            </li>
            <li className="nav-item">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
