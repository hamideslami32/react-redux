import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import thunk from "redux-thunk";
// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";
import rootReducer from "./slices";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

const store = configureStore({ reducer: rootReducer });

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
