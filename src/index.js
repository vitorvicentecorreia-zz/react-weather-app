import React from "react";
import ReactDOM from "react-dom";
import WeatherApp from "./pages/WeatherPage";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<WeatherApp />, document.getElementById("root"));
serviceWorker.unregister();
