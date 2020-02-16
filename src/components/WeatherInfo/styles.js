import styled from "styled-components";

export const Container = styled.div``;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;
export const InfoData = styled.span`
    font-size: ${({ size }) => (size === "large" ? "60px" : "20px")};
`;
export const InfoLabel = styled.span`
    font-size: 20px;
    margin-top: 10px;
    font-size: ${({ size }) => (size === "large" ? "18px" : "12px")};
    color: ${props => props.theme.color};
`;
