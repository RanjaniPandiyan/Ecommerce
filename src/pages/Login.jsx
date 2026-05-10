import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row shadow-lg rounded-4 overflow-hidden bg-white"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        {/* GIF SIDE */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center ">
          <img
            src="/images/login.gif"
            alt="login gif"
            className="img-fluid p-3"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* LOGIN FORM */}
        <div className="col-12 col-md-6 p-5">
          <h2 className="text-center mb-4 fw-bold">Login</h2>

          <form>
            <div className="mb-3">
              <label className="form-label">Enter Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile Number"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <button className="btn btn-dark w-100">Login</button>
          </form>

          <p className="text-center mt-3">
            Don’t have an account?{" "}
            <Link to="/register">
              {" "}
              <span className="text-primary">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
