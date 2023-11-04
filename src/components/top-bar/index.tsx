import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import {ColorModeContext, tokens} from "../../theme";
import {useContext} from "react";
import {DarkMode, LightMode, NotificationsNone, Search} from "@mui/icons-material";
import {useStyles} from "./styles";


const TopBarComponent = () => {
    const {user} = useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()

    return (
        <Box display='flex' justifyContent='space-between' px='32px' py='24px'>
            <Grid>Welcome {user?.firstName}</Grid>
            <Box display='flex' alignItems='center'>
                <Grid onClick={colorMode.toggleColorMode}
                      sx={{pr: '37px', borderRight: `1px solid ${colors.borderColor}`, alignItems: 'center'}}>
                    <IconButton sx={{mr: '45px'}}>
                        {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                    </IconButton>
                    <IconButton>
                        <NotificationsNone/>
                    </IconButton>
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        backgroundColor: `${colors.primary[600]}`,
                        borderRadius: '8px',
                        ml: '28px',
                        border: (theme.palette.mode === 'dark' ? '' : `1px solid ${colors.white[100]}`)
                    }}
                >
                    <IconButton className={classes.root}>
                        <Search/>
                    </IconButton>
                    <InputBase sx={{px: '18px', py: '8px'}} placeholder='Поиск'/>
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;
























