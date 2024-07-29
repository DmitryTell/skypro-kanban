import styled from "styled-components";


export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 20px;
`;

export const Paragraph = styled.p`
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: rgba(148, 166, 190, 0.4);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;
`;

export const ErrorText = styled.p`
    font-family: Arial, sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: -1%;
    text-align: center;
    color: #F84D4D;
`;