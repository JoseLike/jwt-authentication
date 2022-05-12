const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      logged: false,
    },
    actions: {
      logTrue: () => {
        const store = getStore();
        setStore({ logged: true });
      },
      logFalse: () => {
        const store = getStore();
        setStore({ logged: false });
      },
    },
  };
};

export default getState;
