import React, { useEffect, useState } from "react";

import {
    Container,
    WeatherInfoContainer,
    WeatherInfoSmall,
    NextInfoContainer,
    TimezoneContainer
} from "./styles";

import Timezone from "../../components/Timezone";
import WeatherImage from "../../components/WeatherImage";
import WeatherInfo from "../../components/WeatherInfo";
import NextDay from "../../components/NextDay";

import darkSkyApi from "../../server/darkSkyApi";
import { weatherInfoCreator } from "../../helpers/weatherInfo";

export default function WeatherPage() {
    const [weatherInfo, setWeatherInfo] = useState({});

    useEffect(() => {
        let weatherData = {};
        weatherData.currently = {};

        navigator.permissions.query({ name: "geolocation" }).then(result => {
            alert(result.state);
            navigator.geolocation.getCurrentPosition();
            if (result.state === "granted" && result.state === "prompt") {
                // navigator.geolocation.getCurrentPosition(async position => {
                //     const { latitude, longitude } = position.coords;
                //     const weatherRequest = await darkSkyApi.get(
                //         `${latitude},${longitude}`
                //     );
                //     const weatherInfoRequest = weatherInfoCreator(
                //         weatherRequest.data
                //     );
                //     setWeatherInfo(weatherInfoRequest);
                // });
            }
        });
    }, []);

    return (
        <Container>
            <TimezoneContainer>
                <Timezone
                    city={weatherInfo.currently && weatherInfo.currently.city}
                    datetime={
                        weatherInfo.currently && weatherInfo.currently.datetime
                    }
                />
            </TimezoneContainer>
            <WeatherInfoContainer>
                <WeatherImage
                    size="large"
                    weatherLabel={
                        weatherInfo.currently && weatherInfo.currently.label
                    }
                />
                <WeatherInfo
                    size="large"
                    data={
                        weatherInfo.currently &&
                        weatherInfo.currently.temperature
                    }
                    label={weatherInfo.currently && weatherInfo.currently.label}
                />
                <WeatherInfoSmall>
                    <WeatherInfo
                        size="small"
                        label="Vento"
                        data={
                            weatherInfo.currently &&
                            weatherInfo.currently.windSpeed
                        }
                    />
                    <WeatherInfo
                        size="small"
                        label="Humidade"
                        data={
                            weatherInfo.currently &&
                            weatherInfo.currently.humidity
                        }
                    />
                    <WeatherInfo
                        size="small"
                        label="Máxima"
                        data={
                            weatherInfo.currently &&
                            weatherInfo.currently.temperatureHigh
                        }
                    />
                </WeatherInfoSmall>
            </WeatherInfoContainer>
            <NextInfoContainer>
                {weatherInfo.week &&
                    weatherInfo.week.map(day => (
                        <NextDay
                            day={day.day}
                            weatherLabel={day.label}
                            temperature={day.temperature}
                        />
                    ))}
            </NextInfoContainer>
        </Container>
    );
}
