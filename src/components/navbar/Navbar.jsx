import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logo } from "../../constants";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../helpers/PersistanceStorage";
import { logoutUser } from "../../slice/auth";

function Navbar() {
  const { loggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logoutUser());
    removeItem("token");
    navigate("/login");
  };
  return (
    <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
      <Link to={"/"}>
        <img src={Logo} alt="" width={"100px"} height={"70px"} />
      </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
            <p className="me-3 m-0 py-2 text-dark text-decoration-none">
              {user.username}
            </p>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/createArticle"}
            >
              Create 
            </Link>
            <button className="btn btn-outline-danger" onClick={logoutHandler}>
              LogOut
            </button>
          </>
        ) : (
          <>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/login"}
            >
              Login
            </Link>
            <Link
              className="me-3 py-2 text-dark text-decoration-none"
              to={"/register"}
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
