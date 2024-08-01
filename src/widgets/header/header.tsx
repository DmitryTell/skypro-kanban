import Logo from "./icon/logo.svg?react";
import Arrow from "./icon/arrow.svg?react";
import {
    useTheme,
    useUser,
} from "@features/";
import { ButtonBoxCreate } from "@entities/";
import { themeProps, Button } from "@shared/";
import { useHeader } from "./hook";
import { UserPanel } from "./user-panel";
import * as Styled from "./styled";


export const Header = () => {
    const { theme } = useTheme();
    const { user } = useUser();
    const {
        isUserPanel,
        handleToggleUserPanel,
        handleCreateModal,
    } = useHeader();
    
    return (
        <Styled.Content>
            <Styled.Logo $logo={ themeProps[theme].logo }>
                <Logo />
            </Styled.Logo>
            <Styled.Nav>
                <ButtonBoxCreate>
                    <Button
                        type="button"
                        text="Создать новую задачу"
                        onClick={ handleCreateModal }
                    />
                </ButtonBoxCreate>
                <Styled.UserPanelButton
                    $userNameColor={ themeProps[theme].userNameColor }
                    $isUserPanel={ isUserPanel }
                    type="button"
                    onClick={ handleToggleUserPanel }
                >
                    { user.name }
                    <Arrow />
                </Styled.UserPanelButton>
            </Styled.Nav>
            { isUserPanel && <UserPanel /> }
        </Styled.Content>
    );
};