import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);

  const [datos, setDatos] = useState({});

  const sendNewUser = async () => {
    const response = await fetch(
      "https://3000-4geeksacade-reactflaskh-vb52hxud9lh.ws-eu43.gitpod.io/api/signup",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container bg-light mt-5 mb-3 p-3 border border-warning rounded">
      <div class="d-flex flex-row align-items-center mb-4">
        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
        <div class="form-outline flex-fill mb-0">
          <input
            type="email"
            id="form3Example3c"
            class="form-control"
            placeholder="Enter email"
            name="email"
            onChange={(e) => setDatos({ ...datos, email: e.target.value })}
          />
        </div>
      </div>
      <div class="d-flex flex-row align-items-center mb-4">
        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
        <div class="form-outline flex-fill mb-0">
          <input
            type="password"
            id="form3Example4c"
            class="form-control"
            placeholder="Enter Password"
            name="password"
            onChange={(e) => setDatos({ ...datos, password: e.target.value })}
          />
        </div>
      </div>
      <div className="row justify-content-center">
        <button
          type="button"
          class="col-3 btn btn-outline-success"
          onClick={() => sendNewUser()}
        >
          Success
        </button>
      </div>
    </div>
  );
};
