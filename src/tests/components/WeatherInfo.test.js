import { shallow } from "enzyme";
import React from "react";

import WeatherInfo from "../../components/WeatherInfo";
import InfoLoader from "../../components/ContentLoaders/InfoLoader";

describe("tests of WeatherInfo component", () => {
    const noPropsWrapper = shallow(
        <WeatherInfo label="" data="" size="small" />
    );
    const propsWrapper = shallow(
        <WeatherInfo label="Wind" data="9km/h" size="large" />
    );

    it("Enquanto o componente não receber os dados passados por prop, ele deverá renderizar um Content Loader", () => {
        expect(noPropsWrapper.find(InfoLoader)).toHaveLength(1);
        expect(noPropsWrapper.find(".info-container")).toHaveLength(0);
    });

    it("Quando receber os dados, o componente deverá remover o loader e renderizar o infoContainer", () => {
        expect(propsWrapper.find(".info-container")).toHaveLength(1);
        expect(propsWrapper.find(InfoLoader)).toHaveLength(0);
    });
});
