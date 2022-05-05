import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const [body, setBody] = useState("");

  useEffect(() => {
    getInfoUser();
  }, []);
  const token = localStorage.getItem("token");
  const getInfoUser = async () => {
    const response = await fetch(
      "https://3001-joselike-jwtauthenticat-owduz60wz88.ws-eu44.gitpod.io/api/private",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
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
