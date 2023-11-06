import {Button, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {IPropsLogin} from "../../../common/types/auth";
import React from "react";

const LoginPage: React.FC<IPropsLogin> = (props): JSX.Element => {

    const {register, errors} = props

    return (
        <>
            <Typography variant="h2" textAlign={'center'}>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign={'center'}>Введите ваш
                логин и
                пароль</Typography>
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Введите ваш email"
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email', {
                    required: 'Это обязательное поле',
                    pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

                })}
            />
            <TextField
                error={!!errors.password}
                type={"password"}
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Введите ваш пароль"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password', {
                    required: 'Это обязательное поле',
                    minLength: 5
                })}
            />
            <Button type='submit' sx={{marginTop: 2, marginBottom: 2, width: '60%'}}
                    variant="contained">Войти</Button>
            <Typography variant="body1" textAlign={'center'}>У вас нет
                аккаунта?<Link to='/register' className="incitingText"> Регистрация</Link></Typography>
        </>
    );
};

export default LoginPage;