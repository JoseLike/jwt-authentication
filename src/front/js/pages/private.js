import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Private = () => {
  const [body, setBody] = useState("");

  useEffect(() => {
    getInfoUser();
  }, []);
  const token = localStorage.getItem("token");
  const getInfoUser = async () => {
    const response = await fetch(
      "https://3001-joselike-jwtauthenticat-mkaya0eu3my.ws-eu44.gitpod.io/api/private",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
    if (data.logged == true) {
      setBody(
        "Bienvenido a la pagina Private y enhorabuena por su nuevo token"
      );
    } else {
      setBody("No tienes acceso a esta pagina, registrese o haga login");
    }
  };

  return <h1>{body}</h1>;
};
