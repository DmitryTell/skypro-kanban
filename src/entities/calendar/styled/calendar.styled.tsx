import styled from "styled-components";


interface ICalendarStylesProps {
    $textColor?: string;
    $isCurrentDay?: boolean;
    $isSelected?: boolean;
    $activeTextColor?: string;
}

export const Container = styled.div`
    width: 168px;
    display: flex;
    flex-flow: column;
    gap: 14px;

    @media (max-width: 877px) {
        width: 100%;
    }
`;

export const Content = styled.div`
    width: 100%;
    min-height: 172px;
    display: flex;
    flex-flow: column;
    gap: 7px;
`;

export const MonthBox = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
    gap: 10px;

    @media (max-width: 877px) {
        width: 100%;
        justify-content: space-between;
        gap: 0;
    }
`;

export const Month = styled.span`
    width: 129px;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #94A6BE;

    @media (max-width: 877px) {
        width: auto;
    }
`;

export const Buttons = styled.div`
    width: 28px;
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 877px) {
        width: 36px;
        gap: 24px;
    }
`;

export const Button = styled.button`
    background: transparent;
    border: none;
`;

export const Table = styled.table`
    width: 100%;
    height: 140px;

    @media (max-width: 877px) {
        align-self: center;
        max-width: 344px;
        height: 285px;
    }

    & tr th {
        width: 11px;
        height: 12px;
        font-weight: 500;
        color: #94A6BE;

        @media (max-width: 877px) {
            width: auto;
            height: auto;
        }
    }

    & tr td {
        width: 22px;
        height: 22px;
        border-radius: 50%;

        @media (max-width: 877px) {
            width: 42px;
            height: 42px;
        }
    }

    & tr th,
    & tr td {
        font-size: 10px;
        line-height: 11px;
        letter-spacing: -2%;
        text-align: center;

        @media (max-width: 877px) {
            font-size: 14px;
            line-height: 16px;
            letter-spacing: 0%;
        }
    }
`;

export const Cell = styled.td<ICalendarStylesProps>`
    background: ${({ $isSelected }) => ($isSelected ? "#94A6BE" : "transparent")};
    font-weight: ${({ $isCurrentDay }) => ($isCurrentDay ? "700" : "400")};
    color: ${({ $isSelected, $activeTextColor }) => ($isSelected ? $activeTextColor : "#94A6BE")};
`;

export const CellClickable = styled(Cell)`
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        background: #EAEEF6;
    }
`;

export const DeadlineText = styled.span`
    font-weight: 400;
    font-size: 10px;
    line-height: 11px;
    color: #94A6BE;

    @media (max-width: 877px) {
        font-size: 14px;
        line-height: 16px;
    }
`;

export const DeadlineDate = styled(DeadlineText)<ICalendarStylesProps>`
    color: ${({ $textColor }) => ($textColor)};
`;