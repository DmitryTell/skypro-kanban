import { FC } from "react";

import { themeProps } from "@shared/";
import Next from "./icon/next.svg?react";
import Prev from "./icon/prev.svg?react";
import { ICalendar } from "./interface";
import { months } from "./lib";
import * as Styled from "./styled";


export const CalendarMobile: FC<ICalendar> = ({
    date,
    currentTheme,
    calendarDays,
    isClickable,
    currentDay,
    activeDay,
    selectedDate,
    children,
    onClickNextMonth,
    onClickPrevMonth,
    onClickNewDay,
}) => (
    <Styled.Container>
        { children }
        <Styled.MonthBox>
            <Styled.Month>
                { months[date.month] } { date.year }
            </Styled.Month>
            <Styled.Buttons>
                <Styled.Button
                    type="button"
                    onClick={ onClickPrevMonth }
                >
                    <Prev />
                </Styled.Button>
                <Styled.Button
                    type="button"
                    onClick={ onClickNextMonth }
                >
                    <Next />
                </Styled.Button>
            </Styled.Buttons>
        </Styled.MonthBox>
        <Styled.Table>
            <thead>
                <tr>
                    <th>пн</th>
                    <th>вт</th>
                    <th>ср</th>
                    <th>чт</th>
                    <th>пт</th>
                    <th>сб</th>
                    <th>вс</th>
                </tr>
            </thead>
            <tbody>
                { calendarDays.map((weekDays, index) => (
                    <tr key={ String(index) }>
                        { weekDays.map((day, index) => day === "" ? (
                            <td key={ String(index) }></td>
                        ) : isClickable ? (
                            <Styled.CellClickable
                                key={ String(index) }
                                $isCurrentDay={ Number(day) === currentDay }
                                $isSelected={ day === activeDay }
                                $activeTextColor={ themeProps[currentTheme].activeTextColor }
                                onClick={ onClickNewDay }
                            >
                                { day }
                            </Styled.CellClickable>
                        ) : (
                            <Styled.Cell
                                key={ String(index) }
                                $isCurrentDay={ Number(day) === currentDay }
                                $isSelected={ day === activeDay }
                                $activeTextColor={ themeProps[currentTheme].activeTextColor }
                            >
                                { day }
                            </Styled.Cell>
                        )) }
                    </tr>
                )) }
            </tbody>
        </Styled.Table>
        <Styled.DeadlineText>
            Срок исполнения:
            <Styled.DeadlineDate
                $textColor={ themeProps[currentTheme].textColor }
            >
                { selectedDate }
            </Styled.DeadlineDate>
        </Styled.DeadlineText>
    </Styled.Container>
);