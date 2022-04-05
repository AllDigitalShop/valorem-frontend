import { createStore } from "redux";

const store = createStore((state = {}, action) => {
  switch (action.type) {
    case "CONNECT_WALLET":
      return {
        ...state,
        wallet: action?.wallet,
      };
    case "DISCONNECT_WALLET":
      return {
        ...state,
        wallet: null,
      };
    default:
      return {
        ...state,
      };
  }
});

export default store;