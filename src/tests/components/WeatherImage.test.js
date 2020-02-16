import { shallow } from "enzyme";
import React from "react";

import ImageLoader from "../../components/ContentLoaders/ImageLoader";
import WeatherImage from "../../components/WeatherImage";

describe("tests of WeatherImage component", () => {
    const noPropWrapper = shallow(<WeatherImage />);
    const propWrapper = shallow(<WeatherImage weatherLabel={"cloudy"} />);

    it("Enquanto o componente não receber os dados passados por prop, ele deverá renderizar um Content Loader", () => {
        expect(noPropWrapper.find(ImageLoader)).toHaveLength(1);
        expect(noPropWrapper.find(".weather-image")).toHaveLength(0);
    });
    it("Quando receber os dados, o componente deve renderizar a imagem e remover o Content Loader", () => {
        expect(propWrapper.find(ImageLoader)).toHaveLength(0);
        expect(propWrapper.find(".weather-image")).toHaveLength(1);
    });
});
