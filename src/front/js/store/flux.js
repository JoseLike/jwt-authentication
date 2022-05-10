const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: null,
    },
    actions: {
      getInfoLogged: async () => {
        const response = await fetch(
          "https://3001-joselike-jwtauthenticat-pwqwb0bbvnz.ws-eu44.gitpod.io/api/log",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const data = await response.json();
        if (data.logged != true) {
          setStore({ logged: false });
        } else {
          setStore({ logged: true });
        }
      },
    },
  };
};

export default getState;
