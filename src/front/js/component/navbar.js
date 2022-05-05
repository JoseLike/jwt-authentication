import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <Link to={"/signup"}>
            <button
              className="btn btn-link create-user"
              type="button"
              id="NavButtonCreateUser"
            >
              SignUp
            </button>
          </Link>
          <Link to={"/login"}>
            <button
              className="btn btn-success login-user"
              type="button"
              id="NavButtonLogin"
            >
              Login
            </button>
          </Link>
          <Link to={"/login"}>
            <button
              className="btn btn-danger login-user"
              type="button"
              id="NavButtonLogin"
              onClick={() => {
                localStorage.removeItem("token");
              }}
            >
              LogOut
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
