import React from "react";

import {
    Container,
    ContainerData,
    ContainerLoader,
    City,
    DateTime
} from "./styles";
import TimezoneLoader from "../../components/ContentLoaders/TimezoneLoader";

export default function Timezone(props) {
    return (
        <Container>
            {props.city ? (
                <ContainerData>
                    <City className="city">{props.city}</City>
                    <DateTime className="date-time">{props.datetime}</DateTime>
                </ContainerData>
            ) : (
                <ContainerLoader>
                    <TimezoneLoader />
                </ContainerLoader>
            )}
        </Container>
    );
}
