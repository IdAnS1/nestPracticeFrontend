import React, {useState} from "react";
import {Box, Grid, TextField} from "@mui/material";
import {useStyles} from "./styles";
import AppLoadingButton from "../loading-button";
import {useAppDispatch} from "../../utils/hook";
import {updateUserPassword} from "../../store/thunks/auth";

const ChangePasswordComponent = () => {
    const [dataPassword, setDataPassword] = useState({
        newPassword: '',
        oldPassword: ''
    })
    const classes = useStyles()
    const dispatch = useAppDispatch()

    const handleChangePassword = (e: React.SyntheticEvent) => {
        e.preventDefault()

        dispatch(updateUserPassword(dataPassword))
    }

    return (
        <Grid
            component='form'
            noValidate
            autoComplete='off'
            onSubmit={handleChangePassword}
            className={classes.root}
        >
            <Box
                className={classes.formWrapper}
            >
                <TextField
                    className={classes.inputField}
                    value={dataPassword.oldPassword}
                    type='text'
                    label='Старый пароль'
                    variant='outlined'
                    onChange={(e) => setDataPassword(prevState => ({...prevState, oldPassword: e.target.value}))}
                />
                <TextField
                    className={classes.inputField}
                    value={dataPassword.newPassword}
                    type='text'
                    label='Новый пароль'
                    variant='outlined'
                    onChange={(e) => setDataPassword(prevState => ({...prevState, newPassword: e.target.value}))}
                />
                <Box>
                    <AppLoadingButton type='submit'>
                        Изменить пароль
                    </AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    );
};

export default ChangePasswordComponent;