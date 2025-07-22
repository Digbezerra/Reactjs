import React from "react";
import ReactDom from "react-dom/client";
import App from "./3-advanced/sections/Redux/redux-intro/App";

import { Provider } from "react-redux";

import { store } from "./3-advanced/sections/Redux/redux-intro/store";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
