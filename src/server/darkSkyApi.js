import axios from "axios";

const darkSkyApi = axios.create({
    baseURL:
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/d5389157789ca5d45e544fd93cb04a13/"
});

export default darkSkyApi;
