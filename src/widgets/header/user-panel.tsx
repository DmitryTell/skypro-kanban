import {
    useTheme,
    useUser,
} from "@features/";
import {
    FormContainerUserPanel,
    ButtonBoxUserPanel,
} from "@entities/";
import {
    themeProps,
    ThemeSwitcher,
    ButtonTransparent,
    Theme,
} from "@shared/";
import { useHeader } from "./hook";
import * as Styled from "./styled";


export const UserPanel = () => {
    const { theme, toggleTheme } = useTheme();
    const { user } = useUser();
    const { handleQuitModal } = useHeader();

    return (
        <FormContainerUserPanel
            currentTheme={ theme }
        >
            <Styled.UserPanelContent>
                <Styled.UserBox>
                    <Styled.UserName $textColor={ themeProps[theme].textColor }>
                        { user.name }
                    </Styled.UserName>
                    <Styled.Email>
                        { user.login }
                    </Styled.Email>
                </Styled.UserBox>
                <Styled.ThemeBox>
                    <Styled.ThemeName $textColor={ themeProps[theme].textColor }>
                        Темная тема
                    </Styled.ThemeName>
                    <ThemeSwitcher
                        $rangeTrackColor={ themeProps[theme].rangeTrackColor }
                        $rangeThumbColor={ themeProps[theme].rangeThumbColor }
                        value={ theme === Theme.normal ? 0 : 1 }
                        onChange={ toggleTheme }
                    />
                </Styled.ThemeBox>
            </Styled.UserPanelContent>
            <ButtonBoxUserPanel>
                <ButtonTransparent
                    $buttonBorderColor={ themeProps[theme].buttonBorderColor }
                    $buttonColor={ themeProps[theme].buttonColor }
                    text="Выйти"
                    onClick={ handleQuitModal }
                />
            </ButtonBoxUserPanel>
        </FormContainerUserPanel>
    );
};