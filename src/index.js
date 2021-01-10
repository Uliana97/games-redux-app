import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { allReducers } from "./redusers";
import { Provider } from "react-redux";

import App from "./App";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
