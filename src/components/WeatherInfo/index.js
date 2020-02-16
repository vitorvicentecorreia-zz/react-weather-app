import React from "react";

import { Container, InfoContainer, InfoData, InfoLabel } from "./styles";

import InfoLoader from "../../components/ContentLoaders/InfoLoader";

export default function WeatherInfo(props) {
    return (
        <Container>
            {!props.label && !props.data ? (
                <InfoLoader />
            ) : (
                <InfoContainer size={props.size} className="info-container">
                    <InfoData>{props.data}</InfoData>
                    <InfoLabel>{props.label}</InfoLabel>
                </InfoContainer>
            )}
        </Container>
    );
}
