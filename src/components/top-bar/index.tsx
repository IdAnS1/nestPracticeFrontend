import {AppBar, Grid, Toolbar, Typography} from "@mui/material";
// import {useAppSelector} from "../../utils/hook";
import {FC} from "react";
import {useStyles} from "./styles";
import {MenuOutlined} from "@mui/icons-material";
import FlexBetween from "../flex-between";
import {ITopBarProps} from "../../common/types/top-bar";
import ThemeSwitcherComponent from "../theme-switcher";
import SearchBarComponent from "../search-bar";


const TopBarComponent: FC<ITopBarProps> = (props: ITopBarProps) => {
    // const {user} = useAppSelector(state => state.auth.user)
    // const theme = useTheme()
    // const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const {isOpen, setIsOpen, isNonMobile} = props

    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolbar}>
                <Grid container display='flex' alignItems='center' justifyContent='space-between'>
                    <Grid item sm={3} lg={3}>
                        <FlexBetween>
                            <MenuOutlined className={classes.menuIcon} onClick={() => setIsOpen(!isOpen)}/>
                            <Typography variant='h3'>Welcome {sessionStorage.getItem('name')}</Typography>
                        </FlexBetween>
                    </Grid>
                    {isNonMobile &&
                        (
                            <Grid item display='flex' justifyContent='flex-end' alignItems='center' sm={9} lg={9}>
                                <ThemeSwitcherComponent/>
                                <SearchBarComponent/>
                            </Grid>
                        )
                    }
                </Grid>
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
























