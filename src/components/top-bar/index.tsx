import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
// import {useAppSelector} from "../../utils/hook";
import {ColorModeContext} from "../../theme";
import {FC, useContext} from "react";
import {useStyles} from "./styles";
import {DarkMode, LightMode, MenuOutlined, NotificationsNone, Search} from "@mui/icons-material";
import FlexBetween from "../flex-between";
import {ITopBarProps} from "../../common/types/top-bar";


const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps) => {
    // const {user} = useAppSelector(state => state.auth.user)
    const theme = useTheme()
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const {isOpen, setIsOpen} = props

    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
                <FlexBetween>
                    <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                    <Typography variant='h3'>Welcome {sessionStorage.getItem('name')}</Typography>
                </FlexBetween>
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
            </Toolbar>
        </AppBar>

        // <Box className={classes.root}>
        //     <Grid>Welcome {user?.firstName}</Grid>
        //     <Box display='flex' alignItems='center'>
        //         <Grid className={classes.iconBlock}>
        //             <IconButton className={classes.themeIcon} onClick={colorMode.toggleColorMode}>
        //                 {theme.palette.mode === 'dark' ? (<DarkMode/>) : (<LightMode/>)}
        //             </IconButton>
        //             <IconButton>
        //                 <NotificationsNone/>
        //             </IconButton>
        //         </Grid>
        //         <Grid
        //             className={classes.searchBlock}
        //         >
        //             <IconButton className={classes.searchIcon}>
        //                 <Search/>
        //             </IconButton>
        //             <InputBase className={classes.searchInput} placeholder='Поиск'/>
        //         </Grid>
        //     </Box>
        // </Box>
    );
};

export default TopBarComponent;
























