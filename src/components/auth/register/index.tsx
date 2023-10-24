import {Button, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import React from "react";
import {IPropsRegister} from "../../../common/types/auth";

const RegisterPage: React.FC<IPropsRegister> = (props): JSX.Element => {
    const {setPassword, setRepeatPassword, setUserName, setEmail, setFirstName} = props
    return (
        <>
            <Typography variant="h2" textAlign='center'>Регистрация</Typography>
            <Typography variant="body1" marginBottom={3} textAlign='center'>Введите данные для
                регистрации</Typography>
            <TextField fullWidth={true} onChange={(e) => setFirstName(e.target.value)} margin="normal" label="Имя"
                       variant="outlined" placeholder="Введите ваше имя"/>
            <TextField fullWidth={true} onChange={(e) => setUserName(e.target.value)} margin="normal" label="Username"
                       variant="outlined"
                       placeholder="Введите ваш username"/>
            <TextField fullWidth={true} onChange={(e) => setEmail(e.target.value)} margin="normal" label="Email"
                       variant="outlined"
                       placeholder="Введите ваш email"/>
            <TextField fullWidth={true} onChange={(e) => setPassword(e.target.value)} type={"password"} margin="normal"
                       label="Password" variant="outlined"
                       placeholder="Введите ваш пароль"/>
            <TextField fullWidth={true} onChange={(e) => setRepeatPassword(e.target.value)} type="password"
                       margin="normal" label="Password" variant="outlined"
                       placeholder="Повторите ваш пароль"/>
            <Button type="submit" sx={{marginTop: 2, marginBottom: 2, width: '60%'}}
                    variant="contained">Регистрация</Button>
            <Typography variant="body1" textAlign={'center'}>У вас есть
                аккаунта?<Link to='/login' className="incitingText"> Авторизация</Link></Typography>
        </>
    );
};

export default RegisterPage