import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux"; 
import { Provider } from "react-redux";
import allReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension"; 

const store = createStore(
  allReducers,
  composeWithDevTools() 
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
