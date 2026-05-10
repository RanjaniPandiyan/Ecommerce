import { useState } from "react";
import { Link } from "react-router-dom";
function Register() {
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [msg, setMsg] = useState("");
  function handleChange(e) {
    setPass(e.target.value);
  }
  function handleChange2(e) {
    setCpass(e.target.value);
  }
  function password(e) {
    e.preventDefault();
    if (pass !== cpass) {
      setMsg("Password Doesn't Match");
    } else {
      setMsg("Password Confirmed");
    }
  }
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row shadow-lg rounded-4 overflow-hidden bg-white"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        {/* GIF SIDE */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center ">
          <img
            src="/images/register.gif"
            alt="login gif"
            className="img-fluid p-3"
            style={{ height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* LOGIN FORM */}
        <div className="col-12 col-md-6 p-5">
          <h2 className="text-center mb-4 fw-bold">Register</h2>

          <form onSubmit={password}>
            <div className="mb-3">
              <label className="form-label">Enter Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Mobile Number"
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                autoComplete="new-password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-Enter password"
                autoComplete="new-password"
                onChange={handleChange2}
                required
              />
              <span className="text-danger">{msg}</span>
            </div>
            <button className="btn btn-dark w-100">Register</button>
          </form>

          <p className="text-center mt-3">
            No Need? Back to{" "}
            <Link to="/login">
              {" "}
              <span className="text-primary">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
