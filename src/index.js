import React from "react";
import ReactDOM from "react-dom";
import WeatherContainer from "./containers/WeatherContainer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<WeatherContainer />, document.getElementById("root"));
serviceWorker.register();
