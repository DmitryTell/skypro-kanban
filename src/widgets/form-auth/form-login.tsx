import {
    useAppSelector,
    getValuesState,
    useTheme,
} from "@features/";
import {
    FormContainerAuth,
    InputBoxAuth,
    ButtonBoxAuth,
    TitleAuth,
} from "@entities/";
import {
    InputAuth,
    Button,
    Link,
    themeProps,
} from "@shared/";
import { useChangeValues, useSubmitHandlers } from "./hooks";
import * as Styled from "./styled";


export const FormLogin = () => {
    const {
        login,
        password,
        isLoginError,
        isPasswordError,
        isError,
        errorText,
        isDisabled,
    } = useAppSelector(getValuesState);
    const {
        handleChangeLogin,
        handleChangePassword,
    } = useChangeValues();
    const { handleSubmitLogin } = useSubmitHandlers();
    const { theme } = useTheme();

    return(
        <FormContainerAuth currentTheme={ theme }>
            <TitleAuth
                text="Вход"
                currentTheme={ theme }
            />
            <Styled.Form onSubmit={ handleSubmitLogin }>
                <InputBoxAuth>
                    <InputAuth
                        $color={ themeProps[theme].textColor }
                        $isError={ isLoginError }
                        type="email"
                        value={ login }
                        placeholder="Эл. почта"
                        onChange={ handleChangeLogin }
                    />
                    <InputAuth
                        $color={ themeProps[theme].textColor }
                        $isError={ isPasswordError }
                        type="password"
                        value={ password }
                        placeholder="Пароль"
                        onChange={ handleChangePassword }
                    />
                </InputBoxAuth>
                { isError && <Styled.ErrorText>{ errorText }</Styled.ErrorText> }
                <ButtonBoxAuth>
                    <Button
                        type="submit"
                        text="Войти"
                        disabled={ isDisabled }
                    />
                </ButtonBoxAuth>
            </Styled.Form>
            <Styled.Paragraph>
                Нужно зарегистрироваться?
                <Link
                    $hoverLinkColor={ themeProps[theme].textColor }
                    path="/register"
                    text="Регистрируйтесь здесь"
                />
            </Styled.Paragraph>
        </FormContainerAuth>
    );
};