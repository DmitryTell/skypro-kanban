import styled from "styled-components";


interface IFormContainerStylesProps {
    $formBacground?: string;
    $formBorderColor?: string;
    $userPanelBackground?: string;
    $userPanelBorderColor?: string;
    $userPanelShadowColor?: string;
}

const FormContainerStyles = styled.div<IFormContainerStylesProps>`
    background: ${({ $formBacground }) => ($formBacground)};
    border: 0.7px solid ${({ $formBorderColor }) => ($formBorderColor)};
    border-radius: 10px;
`;

export const FormContainerAuthStyles = styled(FormContainerStyles)`
    width: 368px;
    min-height: 329px;
    padding: 50px 60px;
    -webkit-box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    -moz-box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 426px) {
        width: 100%;
        min-height: 100vh;
        border-radius: 0;
    }
`;

export const FormContainerUserPanelStyles = styled(FormContainerStyles)`
    position: absolute;
    top: 61px;
    right: 0;
    z-index: 1;
    width: 213px;
    height: 205px;
    padding: 34px;
    background: ${({ $userPanelBackground }) => ($userPanelBackground)};
    border: 0.7px solid ${({ $userPanelBorderColor }) => ($userPanelBorderColor)};
    -webkit-box-shadow: 0px 10px 39px 0px ${({ $userPanelShadowColor }) => ($userPanelShadowColor)};
    -moz-box-shadow: 0px 10px 39px 0px ${({ $userPanelShadowColor }) => ($userPanelShadowColor)};
    box-shadow: 0px 10px 39px 0px ${({ $userPanelShadowColor }) => ($userPanelShadowColor)};
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 30px;
`;

export const FormContainerModalStyles = styled(FormContainerStyles)`
    width: 630px;
    margin: 0 auto;
    padding: 40px 30px 48px;
    border-radius: 10px;
    display: flex;
    flex-flow: column;
    gap: 20px;

    @media (max-width: 877px) {
        width: 100%;
        height: 100vh;
        padding: 20px 16px 100px;
        border: none;
        border-top: 0.7px solid rgba(148, 166, 190, 0.4);
        border-radius: 0;
        gap: 20px;
        overflow: auto;
        scrollbar-width: 0;

        &::-webkit-scrollbar {
            width: 0;
        }

        &::-moz-scrollbar {
            width: 0;
        }
    }
`;

export const FormContainerModalQuitStyles = styled(FormContainerStyles)`
    max-width: 370px;
    height: 100%;
    margin: 0 auto;
    padding: 50px 60px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 20px;
    -webkit-box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    -moz-box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

    @media (max-width: 877px) {
      padding: 50px 20px;
    }
`;