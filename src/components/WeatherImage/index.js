import React from "react";

import ImageLoader from "../ContentLoaders/ImageLoader";

import { Container, Image } from "./styles";

export default function WeatherImage(props) {
    const defineImage = () => {
        return require(`../../assets/images/${props.weatherLabel}.png`);
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
