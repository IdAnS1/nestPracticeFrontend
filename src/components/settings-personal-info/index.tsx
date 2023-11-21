import React, {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {useStyles} from "./styles";
import {Box, Grid, TextField} from "@mui/material";
import AppLoadingButton from "../loading-button";
import {getPublicUser, updateUserInfo} from "../../store/thunks/auth";

const SettingsPersonalInfoComponent = () => {
    const classes = useStyles()
    const [userInfo, setUserInfo] = useState({
        name: '',
        username: '',
        email: ''
    })
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.auth.user)

    useEffect(() => {
        setUserInfo({
            name: user?.firstName,
            username: user?.userName,
            email: user?.email
        })
    }, [user])

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const data = {
            firstName: userInfo.name,
            userName: userInfo.username,
            email: userInfo.email
        }
        dispatch(updateUserInfo(data))
        dispatch(getPublicUser())
    }


    return (
        <Grid
            component='form'
            noValidate
            autoComplete='off'
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <Box className={classes.formWrapper}>
                <TextField
                    className={classes.inputField}
                    type='text'
                    label='Имя'
                    variant='outlined'
                    value={userInfo.name}
                    onChange={(e) => setUserInfo(prevState => ({...prevState, name: e.target.value}))}
                />
                <TextField
                    className={classes.inputField}
                    type='text'
                    label='UserName'
                    variant='outlined'
                    value={userInfo.username}
                    onChange={(e) => setUserInfo(prevState => ({...prevState, username: e.target.value}))}
                />
                <TextField
                    className={classes.inputField}
                    type='text'
                    label='Email'
                    variant='outlined'
                    value={userInfo.email}
                    onChange={(e) => setUserInfo(prevState => ({...prevState, email: e.target.value}))}
                />
                <Box className={classes.buttonBlock}>
                    <AppLoadingButton type='submit'>Сохранить</AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    );
};

export default SettingsPersonalInfoComponent;