import axios from "axios";

const darkSkyApi = axios.create({
    baseURL:
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/8f0c3c373f8ba8fbe81f17558daddf4f/"
});

export default darkSkyApi;
