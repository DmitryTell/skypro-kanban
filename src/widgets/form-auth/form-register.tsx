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
import { useChangeValues } from "./hook";
import { useSubmitHandlers } from "./api";
import * as Styled from "./styled";


export const FormRegister = () => {
    const {
        login,
        name,
        password,
        isLoginError,
        isNameError,
        isPasswordError,
        isError,
        errorText,
        isDisabled,
    } = useAppSelector(getValuesState);
    const {
        handleChangeLogin,
        handleChangeName,
        handleChangePassword,
    } = useChangeValues();
    const { handleSubmitRegister } = useSubmitHandlers();
    const { theme } = useTheme();

    return (
        <FormContainerAuth currentTheme={ theme }>
            <TitleAuth
                text="Регистрация"
                currentTheme={ theme }
            />
            <Styled.Form onSubmit={ handleSubmitRegister }>
                <InputBoxAuth>
                    <InputAuth
                        $color={ themeProps[theme].textColor }
                        $isError={ isNameError }
                        type="text"
                        value={ name }
                        placeholder="Имя"
                        onChange={ handleChangeName }
                    />
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
                        text="Зарегистрироваться"
                        disabled={ isDisabled }
                    />
                </ButtonBoxAuth>
            </Styled.Form>
            <Styled.Paragraph>
                Уже есть аккаунт?
                <Link
                    $hoverLinkColor={ themeProps[theme].textColor }
                    path="/login"
                    text="Войдите здесь"
                />
            </Styled.Paragraph>
        </FormContainerAuth>
    );
};