import { shallow } from "enzyme";
import React from "react";

import NextDay from "../../components/NextDay";
import NextDayLoader from "../../components/ContentLoaders/NextDayLoader";

describe("tests of NextDay component", () => {
    const noPropWrapper = shallow(<NextDay />);
    const propWrapper = shallow(
        <NextDay day="segunda" weatherLabel="cloudy" temperature={20} />
    );

    it("Enquanto o componente não receber os dados passados por prop, ele deverá renderizar um Content Loader", () => {
        expect(noPropWrapper.find(NextDayLoader)).toHaveLength(1);
        expect(noPropWrapper.find(".next-day-container")).toHaveLength(0);
    });
    it("Quando receber os dados, o componente deve renderizar as informações e remover o Content Loader", () => {
        expect(propWrapper.find(NextDayLoader)).toHaveLength(0);
        expect(propWrapper.find(".next-day-container")).toHaveLength(1);
    });
});
