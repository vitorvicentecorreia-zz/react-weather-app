import React from "react";

import GlobalStyles from "../../assets/css/GlobalStyles";
import WeatherPage from "../../pages/WeatherPage";
import { ThemeProvider } from "styled-components";

import { Container } from "./styles";

export default function WeatherContainer() {
    const theme = {
        day: {
            color: "#4c5e6a",
            background: "#ffffff"
        },
        night: {
            color: "#ffffff",
            background: "#312e5f"
        }
    };

    const defineHour = theme => {
        const hours = new Date().getHours();
        return hours > 6 && hours < 18 ? theme.day : theme.night;
    };

    return (
        <Container>
            <ThemeProvider theme={defineHour(theme)}>
                <GlobalStyles />
                <WeatherPage />
            </ThemeProvider>
        </Container>
    );
}
