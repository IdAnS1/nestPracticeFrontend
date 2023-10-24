import {Button, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {IPropsLogin} from "../../../common/types/auth";
import React from "react";

const LoginPage: React.FC<IPropsLogin> = (props): JSX.Element => {

    const {setEmail, setPassword} = props

    return (
        <>
            <Typography variant="h2" textAlign={'center'}>Авторизация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign={'center'}>Введите ваш
                логин и
                пароль</Typography>
            <TextField fullWidth={true} onChange={(e) => {
                setEmail(e.target.value)
            }} margin="normal" label="Email" variant="outlined"
                       placeholder="Введите ваш email"/>
            <TextField type={"password"} onChange={(e) => {
                setPassword(e.target.value)
            }} fullWidth={true} margin="normal" label="Password" variant="outlined"
                       placeholder="Введите ваш пароль"/>
            <Button type='submit' sx={{marginTop: 2, marginBottom: 2, width: '60%'}}
                    variant="contained">Войти</Button>
            <Typography variant="body1" textAlign={'center'}>У вас нет
                аккаунта?<Link to='/register' className="incitingText"> Регистрация</Link></Typography>
        </>
    );
};

export default LoginPage;