import React from "react";

import {
    Container,
    ContainerData,
    ContainerLoader,
    City,
    Date,
    Time
} from "./styles";
import TimezoneLoader from "../../components/ContentLoaders/TimezoneLoader";

export default function Timezone(props) {
    return (
        <Container>
            {props.timezoneData ? (
                <ContainerData>
                    <City className="city">{props.timezoneData.city}</City>
                    <Date className="date">{props.timezoneData.date}</Date>
                    <Time className="time">{props.timezoneData.time}</Time>
                </ContainerData>
            ) : (
                <ContainerLoader>
                    <TimezoneLoader />
                </ContainerLoader>
            )}
        </Container>
    );
}
