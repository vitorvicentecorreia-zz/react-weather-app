import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import Timezone from "../../components/Timezone";

import darkSkyApi from "../../server/darkSkyApi";
import { weatherInfoCreator } from "../../helpers/weatherInfo";

export default function WeatherPage() {
    const [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {
        let weatherData = {};
        weatherData.currently = {};

        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;
            const weatherRequest = await darkSkyApi.get(
                `${latitude},${longitude}`
            );
            const weatherInfoRequest = weatherInfoCreator(weatherRequest.data);
            setWeatherInfo(weatherInfoRequest);
            console.log(weatherInfoRequest);
        });
    }, []);

    return (
        <Container>
            <Timezone
                city={weatherInfo.currently && weatherInfo.currently.city}
                datetime={
                    weatherInfo.currently && weatherInfo.currently.datetime
                }
            />
        </Container>
    );
}
