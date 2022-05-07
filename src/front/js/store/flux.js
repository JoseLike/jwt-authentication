const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: null,
    },
    actions: {
      getInfoUser: async () => {
        const response = await fetch(
          "https://3001-joselike-jwtauthenticat-9fslzgg5wgp.ws-eu44.gitpod.io/api/private",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
          }
        );
        const data = await response.json();
        if (data.pass == True) {
          setStore(logged == true) || false;
        } else {
          setStore(logged == false);
        }
      },
    },
  };
};

export default getState;
