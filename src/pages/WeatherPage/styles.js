import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: ${props => props.theme.background};
    height: 100%;
    color: ${props => props.theme.color};
`;
export const TimezoneContainer = styled.div`
    height: 20%;
`;
export const WeatherInfoContainer = styled.div`
    height: 65%;
`;
export const WeatherInfoSmall = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 50px auto 0;
    width: 90%;
`;
export const NextInfoContainer = styled.div`
    height: 15%;
    display: flex;
    width: 100%;
    overflow-x: scroll;
`;
