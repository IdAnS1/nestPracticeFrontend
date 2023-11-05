import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import {ColorModeContext} from "../../theme";
import {useContext} from "react";
import {DarkMode, LightMode, NotificationsNone, Search} from "@mui/icons-material";
import {useStyles} from "./styles";


const TopBarComponent = () => {
    const {user} = useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Grid>Welcome {user?.firstName}</Grid>
            <Box display='flex' alignItems='center'>
                <Grid className={classes.iconBlock}>
                    <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
                    </IconButton>
                    <IconButton>
                        <NotificationsNone/>
                    </IconButton>
                </Grid>
                <Grid
                    className={classes.searchBlock}
                >
                    <IconButton className={classes.searchIcon}>
                        <Search/>
                    </IconButton>
                    <InputBase className={classes.searchInput} placeholder='Поиск'/>
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;
























