import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);
  useEffect = () => {
    actions.getInfoUser, [];
  };

  return (
    <div className="d-flex container mx-auto">
      <div className="row ">
        <h1 className="col">Welcome to the main page !</h1>
      </div>
    </div>
  );
};
