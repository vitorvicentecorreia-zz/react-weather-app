import styled from "styled-components";

export const Container = styled.div``;
export const NextDayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
`;
export const Day = styled.div`
    margin-bottom: 10px;
    color: ${props => props.theme.color};
    font-size: 11px;
`;
export const WeatherLabel = styled.div`
    margin-top: 10px;
`;
