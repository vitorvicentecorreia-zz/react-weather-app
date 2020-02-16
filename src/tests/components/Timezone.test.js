import React from "react";
import { shallow } from "enzyme";

import Timezone from "../../components/Timezone";
import TimezoneLoader from "../../components/ContentLoaders/TimezoneLoader";

describe("testes do componente de Timezone", () => {
    const timezoneData = {
        city: "São Paulo",
        datetime: "Segunda-feira, 15 de Abril 2018, 20:00"
    };

    const noPropWrapper = shallow(<Timezone />);
    const propWrapper = shallow(<Timezone timezoneData={timezoneData} />);

    it("Enquanto o componente não receber os dados passados por prop, ele deverá renderizar um Content Loader", () => {
        expect(noPropWrapper.find(TimezoneLoader)).toHaveLength(1);
        expect(noPropWrapper.find(".city")).toHaveLength(0);
        expect(noPropWrapper.find(".date-time")).toHaveLength(0);
    });

    it("Quando receber os timezoneData, o componente deve renderizar esses dados", () => {
        expect(propWrapper.find(TimezoneLoader)).toHaveLength(0);
        expect(propWrapper.find(".city").text()).toBe("São Paulo");
        expect(propWrapper.find(".date-time").text()).toBe(
            "Segunda-feira, 15 de Abril 2018, 20:00"
        );
    });
});
