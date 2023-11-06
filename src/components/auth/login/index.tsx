import {TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {IPropsLogin} from "../../../common/types/auth";
import React from "react";
import AppButton from "../../app-button";


const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {

    const {register, errors} = props

    return (
        <>
            <Typography variant="h2" textAlign={'center'} fontSize={32}>Авторизация</Typography>
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
                {...register('email')}
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
                {...register('password')}
            />
            <AppButton type='submit'
                       sx={{marginTop: 2, marginBottom: 2, width: '60%', textTransform: 'none !important'}}
                       variant="contained">Войти</AppButton>
            <Typography variant="body1" textAlign={'center'}>У вас нет
                аккаунта?<Link to='/register' className="incitingText"> Регистрация</Link></Typography>
        </>
    );
};

export default LoginPage;