import React from "react";

import { Container, InfoContainer, InfoData, InfoLabel } from "./styles";

import InfoLoader from "../../components/ContentLoaders/InfoLoader";

export default function WeatherInfo(props) {
    return (
        <Container>
            {!props.label && !props.data ? (
                <InfoLoader />
            ) : (
                <InfoContainer className="info-container">
                    <InfoData size={props.size}>{props.data}</InfoData>
                    <InfoLabel size={props.size}>{props.label}</InfoLabel>
                </InfoContainer>
            )}
        </Container>
    );
}
