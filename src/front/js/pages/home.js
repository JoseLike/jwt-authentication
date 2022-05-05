import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const [body, setBody] = useState("");

  useEffect(() => {
    getInfoUser();
  }, []);

  const getInfoUser = async () => {
    const response = await fetch(
      "https://3001-joselike-jwtauthenticat-ns5kb0bdnn0.ws-eu43.gitpod.io/api/private",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    if (data.Pass == true) {
      setBody("Bienvenido a la pagina y enhorabuena por su nuevo token");
    } else {
      setBody("No tienes acceso a esta pagina, registrese o haga login");
    }
  };

  return <h1>{body}</h1>;
};
