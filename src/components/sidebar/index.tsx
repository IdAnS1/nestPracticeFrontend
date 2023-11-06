import {useStyles} from "./styles";
import {FC, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import FlexBetween from "../flex-between";
import {ChevronLeftOutlined, LogoutOutlined} from "@mui/icons-material";
import {navMenu} from "../../common/moks/navigate";
import Logo from '../../assets/images/sidebar/imageLogo.svg'
import {ISidebarProps} from "../../common/types/sidebar";

const SidebarComponent: FC<ISidebarProps> = (props: ISidebarProps) => {
    const [active, setActive] = useState('')
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()
    // const colors = tokens(theme.palette.mode)

    useEffect(() => {
        setActive(pathname)
    }, [pathname])

    const renderNavMenu = navMenu.map((item): JSX.Element => (
        <ListItem key={item.id}>
            <ListItemButton
                onClick={() => {
                    navigate(`${item.path}`)
                }}
                className={active === item.path ? classes.active : classes.navItem}
            >
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText>
                    <Typography variant='body1'>
                        {item.name}
                    </Typography>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    ))

    return (
        <Box component='nav'>
            {isOpen && (
                <Drawer
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    variant='persistent'
                    anchor='left'
                    sx={{
                        width: drawerWidth,
                        '& .MuiDrawer-paper': {
                            color: theme.palette.secondary.main,
                            backgroundColor: theme.palette.primary.main,
                            boxSizing: 'border-box',
                            width: drawerWidth,
                        }
                    }}
                >
                    <Box className={classes.navBlock}>
                        <Box>
                            <FlexBetween>
                                <Box className={classes.brand}>
                                    <img src={Logo} alt="Logo image"/>
                                    <Typography
                                        className={classes.brandTitle}
                                        variant='h1'
                                    >
                                        Demo
                                    </Typography>
                                </Box>
                                {!isNonMobile && (
                                    <IconButton onClick={() => setIsOpen(!isOpen)}>
                                        <ChevronLeftOutlined/>
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>
                        <List className={classes.navList}>
                            {renderNavMenu}
                        </List>
                    </Box>
                    <Box width='100%'>
                        <List>
                            <ListItem key={31}>
                                <ListItemButton className={classes.navItem}>
                                    <ListItemIcon>
                                        <LogoutOutlined/>
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography variant='body1'>
                                            Logout
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;