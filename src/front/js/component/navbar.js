import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      {store.logged != null ? (
        <div className="container">
          <Link to="/">
            <span className="navbar-brand mb-0 h1">React Boilerplate</span>
          </Link>
          <div className="ml-auto">
            {store.logged == false ? (
              <div>
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
              </div>
            ) : (
              <div>
                <Link to={"/private"}>
                  <button
                    className="btn btn-warning login-user"
                    type="button"
                    id="NavButtonLogin"
                  >
                    Private
                  </button>
                </Link>
                <Link to={"/login"}>
                  <button
                    className="btn btn-danger login-user"
                    type="button"
                    id="NavButtonLogin"
                    onClick={() => {
                      localStorage.removeItem("token");
                      actions.logFalse();
                    }}
                  >
                    LogOut
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </nav>
  );
};
