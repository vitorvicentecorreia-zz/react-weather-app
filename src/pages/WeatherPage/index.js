import React from "react";

import { Container } from "./styles";
import Timezone from "../../components/Timezone";

export default function WeatherPage() {
    const timezoneData = {
        city: "São Paulo",
        date: "Segunda-feira, 15 de Abril 2018",
        time: "20:00"
    };

    return (
        <Container>
            <Timezone timezoneData={timezoneData} />
        </Container>
    );
}
