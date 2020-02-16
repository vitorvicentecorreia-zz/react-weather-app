import React from "react";

import ImageLoader from "../ContentLoaders/ImageLoader";

import { Container, Image } from "./styles";

export default function WeatherImage(props) {
    const defineImage = () => {
        switch (props.weatherLabel) {
            case "cloudy":
                return "image";
            default:
                break;
        }
    };

    return (
        <Container>
            {props.weatherLabel ? (
                <Image
                    className="weather-image"
                    size={props.size}
                    src={defineImage()}
                />
            ) : (
                <ImageLoader size={props.size} />
            )}
        </Container>
    );
}
