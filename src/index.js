import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/store";


// const myLogger = (store) => (next) => (action) => {
//   //   console.log("Logged Action: ", action);
//   next(action);
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
