import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
export const ContainerData = styled.div`
    margin-left: 20px;
    color: ${props => props.theme.color};
`;
export const ContainerLoader = styled.div``;
export const City = styled.div`
    font-size: 25px;
    margin-bottom: 10px;
    font-weight: bold;
`;
export const DateTime = styled.div`
    font-size: 14px;
`;
