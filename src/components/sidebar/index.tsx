import {useStyles} from "./styles";
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {Box, Drawer, IconButton, Typography, useTheme} from "@mui/material";
import FlexBetween from "../flex-between";
import {ChevronLeftOutlined} from "@mui/icons-material";

const SidebarComponent = (props: any) => {
    const [active, setActive] = useState('')
    const {isNonMobile, drawerWidth, isOpen, setIsOpen} = props
    const classes = useStyles()
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])

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
                    <Box width='100%'>
                        <Box>
                            <FlexBetween>
                                <Box display='flex' alignItems='center' gap='10px'>
                                    <Typography>
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
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default SidebarComponent;