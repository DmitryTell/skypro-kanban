import styled from "styled-components";


interface ITaskStylesProps {
    $formBackground?: string;
    $textColor?: string;
    $isReady?: boolean;
}

const Loader = styled.div`
    -webkit-animation: loading-animation 1.5s linear infinite alternate both;
	animation: loading-animation 1.5s linear infinite alternate both;
`;

export const Container = styled.li<ITaskStylesProps>`
    width: 100%;
    height: 130px;
    padding: 13px 13px 15px;
    background: ${({ $formBackground }) => ($formBackground)};
    border-radius: 10px;

    @media (max-width: 877px) {
        min-width: 220px;
    }
`;

export const TopBlock = styled.div`
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const EditTaskButton = styled.button`
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
`;

export const Title = styled.h3<ITaskStylesProps>`
    margin-bottom: 35px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: ${({ $textColor }) => ($textColor)};
    text-decoration-line: ${({ $isReady }) => ($isReady ? 'line-through' : 'none')};
`;

export const DateBlock = styled.div`
    width: 59px;
    height: 13px;
    display: flex;
    align-items: center;
    gap: 6px;
`;

export const DateText = styled.span`
    font-weight: 400;
    font-size: 10px;
    line-height: 11px;
    color: #94A6BE;
`;

export const TopLoaderBig = styled(Loader)`
    width: 82px;
    height: 20px;
    border-radius: 18px;
`;

export const TopLoaderSmall = styled(Loader)`
    width: 18px;
    height: 4px;
`;

export const MiddleLoader = styled(Loader)`
    width: 113px;
    height: 13px;
    margin-bottom: 35px;
`;

export const BottomLoader = styled(Loader)`
    width: 58px;
    height: 13px;
`;