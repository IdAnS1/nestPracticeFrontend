import {Button, Checkbox, FormControlLabel, FormGroup, Grid, Typography, useTheme} from "@mui/material";
import {useStyles} from "./styles";
import {tokens} from "../../theme";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../utils/hook";
import {deleteUser} from "../../store/thunks/auth";

const DeleteUserComponent = () => {
    const [checked, setChecked] = useState(false)
    const theme = useTheme()
    const color = tokens(theme.palette.mode)
    const classes = useStyles()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleDelete = (e: any) => {
        e.preventDefault()
        dispatch(deleteUser())
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('name')
        navigate('/login')
    }

    return (
        <Grid container className={classes.root}>
            <Grid item className={classes.tabHeading}>
                <Typography variant='h2'>Удаление аккаунта</Typography>
            </Grid>
            <Grid item className={classes.alertMassage}>
                <Typography variant='body1'>Уважаемый пользователь, удаляя свой аккаунт, вы удаляете всю персональную
                    информацию. После удаления вся сохраненная вами информация будет недоступна.</Typography>
            </Grid>
            <Grid item className={classes.checkBoxBlock} sx={{display: 'flex', justifyContent: 'center'}}>
                <FormGroup>
                    <FormControlLabel control={
                        <Checkbox
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            sx={{
                                color: color.blue,
                                '&.Mui-checked': {
                                    color: color.blue
                                }
                            }}
                            // defaultChecked
                        />
                    } label='Я соглашаюсь'/>
                </FormGroup>
            </Grid>
            <Grid item className={classes.buttonBlock}>
                <Button
                    disabled={!checked}
                    color='success'
                    variant='outlined'
                    onClick={(e) => handleDelete(e)}
                >
                    Удалить аккаунт
                </Button>
            </Grid>
        </Grid>
    );
};

export default DeleteUserComponent;

























