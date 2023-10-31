//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import TrafficeLight from "./component/Trafficlight.jsx";

//render your react application
ReactDOM.render(<TrafficeLight />, document.querySelector("#app"));
