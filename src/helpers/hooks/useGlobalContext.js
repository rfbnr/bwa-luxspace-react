import React, { createContext, useContext, useReducer } from "react";

const Context = createContext();

const initialState = {
  cart: {},
};

export function useGlobalContext() {
  const [state, dispatch] = useContext(Context);

  if (!state || !dispatch) {
    throw new Error("useGlobalContext must be used with a Provider");
  }

  return { state, dispatch };
}

function Reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart
          ? {
              ...state.cart,
              [action.item.id]: action.item,
            }
          : { [action.item.id]: action.item },
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: Object.keys(state.cart)
          .filter((key) => Number(key) !== +action.id)
          .reduce((prev, currKey) => {
            const item = state.cart[currKey];
            prev[currKey] = item;
            return prev;
          }, {}),
      };

    case "RESET_CART":
      return {
        ...state,
        cart: initialState.cart,
      };

    default:
      throw new Error(`Unhandled action type ${action.type}`);
  }
}

export default function ContextProvider(props) {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Context.Provider value={[state, dispatch]} {...props} />;
}
