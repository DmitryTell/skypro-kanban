import styled from 'styled-components';


export const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding-left: 135px;
    padding-right: 135px;

    @media (max-width: 1247px) {
        padding-left: 50px;
        padding-right: 50px;
    }

    @media (max-width: 585px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`;
