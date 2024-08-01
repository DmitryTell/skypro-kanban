import styled from "styled-components";


export const Container = styled.div`
    width: 220px;
`;

export const List = styled.ul`
    padding-bottom: 120px;
    display: flex;
    flex-flow: column;
    gap: 10px;

    @media (max-width: 877px) {
        padding-bottom: 0;
        flex-flow: row;
    }
`;