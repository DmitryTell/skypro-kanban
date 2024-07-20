import styled from "styled-components";


const ButtonBoxStyles = styled.div`
    height: 30px;

    @media (max-width: 877px) {
        height: 40px;
    }
`;

const ButtonBoxModalStyles = styled(ButtonBoxStyles)`
    @media (max-width: 877px) {
        width: 100%;
    }
`;

export const ButtonBoxAuthStyles = styled(ButtonBoxStyles)`
    width: 100%;
`;

export const ButtonBoxCreateStyles = styled(ButtonBoxStyles)`
    width: 178px;

    @media (max-width: 877px) {
        display: none;
    }
`;

export const ButtonBoxCreateMobileStyles = styled(ButtonBoxStyles)`
    display: none;

    @media (max-width: 877px) {
        display: block;
        width: 95%;
        position: fixed;
        bottom: 10px;
        left: 20px;
    }

    @media (max-width: 426px) {
        width: 90%;
    }
`;

export const ButtonBoxUserPanelStyles = styled(ButtonBoxStyles)`
    width: 72px;

    @media (max-width: 877px) {
        width: 142px;
    }
`;

export const ButtonBoxQuitStyles = styled(ButtonBoxStyles)`
    width: 153px;

    @media (max-width: 877px) {
        width: 100%;
    }
`;

export const ButtonBoxModalCreateStyles = styled(ButtonBoxModalStyles)`
    width: 132px;
`;

export const ButtonBoxModalEditStyles = styled(ButtonBoxModalStyles)`
    width: 176px;
`;

export const ButtonBoxModalDeleteStyles = styled(ButtonBoxModalStyles)`
    width: 131px;
`;

export const ButtonBoxModalCloseStyles = styled(ButtonBoxModalStyles)`
    width: 86px;
`;

export const ButtonBoxModalSaveStyles = styled(ButtonBoxModalStyles)`
    width: 99px;
`;

export const ButtonBoxModalCancelStyles = styled(ButtonBoxModalStyles)`
    width: 93px;
`;