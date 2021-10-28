import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ContextProvider from "./context/ContextProvider";

import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <ContextProvider>
  <Router baseurl="/">
    
    <App />

  </Router>
  </ContextProvider>
,
  document.getElementById("root")
);