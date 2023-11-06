import {TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";
import {IPropsRegister} from "../../../common/types/auth";
import AppButton from "../../app-button";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {register, errors} = props
    return (
        <>
            <Typography variant="h2" textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>Введите данные для
                регистрации</Typography>
            <TextField
                error={!!errors.name}
                fullWidth={true}
                margin="normal"
                label="Имя"
                variant="outlined"
                placeholder="Введите ваше имя"
                helperText={errors.name ? `${errors.name.message}` : ''}
                {...register('name')}
            />
            <TextField
                error={!!errors.username}
                fullWidth={true}
                margin="normal"
                label="Username"
                variant="outlined"
                placeholder="Введите ваш username"
                helperText={errors.username ? `${errors.username.message}` : ''}
                {...register('username')}
            />
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
                fullWidth={true}
                type={"password"}
                margin="normal"
                label="Password" variant="outlined"
                placeholder="Введите ваш пароль"
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <TextField
                error={!!errors.confirmPassword}
                fullWidth={true}
                type="password"
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Повторите ваш пароль"
                helperText={errors.confirmPassword ? `${errors.confirmPassword.message}` : ''}
                {...register('confirmPassword')}
            />
            <AppButton type="submit"
                       sx={{marginTop: 2, marginBottom: 2, width: '60%', textTransform: 'none !important'}}
                       variant="contained">Регистрация</AppButton>
            <Typography variant="body1" textAlign={'center'}>У вас есть
                аккаунта?<Link to='/login' className="incitingText"> Авторизация</Link></Typography>
        </>
    );
};

export default RegisterPage