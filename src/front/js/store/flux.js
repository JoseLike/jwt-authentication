const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: false,
    },
    actions: {
      getInfoLogged: async () => {
        let token = localStorage.getItem("token");
        if (token != null || token != undefined) {
          const response = await fetch(
            "https://3001-joselike-jwtauthenticat-c3ejae43ia9.ws-eu44.gitpod.io/api/private",
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
            }
          );
          const data = await response.json();
          if (data.logged != true) {
            setStore({ logged: false });
          } else {
            setStore({ logged: true });
          }
        } else {
          setStore({ logged: false });
        }
      },
    },
  };
};

export default getState;
