import React from "react";

import { Container, NextDayContainer, Day, WeatherLabel } from "./styles";

import NextDayLoader from "../../components/ContentLoaders/NextDayLoader";
import WeatherImage from "../../components/WeatherImage";

export default function NextDay(props) {
    return (
        <Container>
            {!props.day && !props.weatherLabel && !props.temperature ? (
                <NextDayLoader />
            ) : (
                <NextDayContainer className="next-day-container">
                    <Day>{props.day}</Day>
                    <WeatherImage weatherLabel={props.weatherLabel} />
                    <WeatherLabel>{props.temperature}</WeatherLabel>
                </NextDayContainer>
            )}
        </Container>
    );
}
