import React from "react";
import { createStore } from "redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const initialState = {
  result: 1,
  lastValues: [],
  username: "Max"
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
    case "SUBTRACT":
      state = {
        ...state,
        result: state.result - action.payload,
        lastValues: [...state.lastValues, action.payload],
      };
      break;
  }
  return state;
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log("State changed", store.getState());
});

store.dispatch({
  type: "ADD",
  payload: 10,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
