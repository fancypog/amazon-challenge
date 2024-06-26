import React, { createContext, useContext, useReducer } from "react";

// Prepare the dataLayer
// StateContext is the global state containter
export const StateContext = createContext();


// Wrap the app and provide the Data layer
export const StateProvider =({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);


