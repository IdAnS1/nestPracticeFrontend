import TopBarComponent from "../top-bar";
import {Outlet, useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import SidebarComponent from "../sidebar";
import {useState} from "react";
import {useStyles} from "./styles";

const LayouteComponent = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {pathname} = useLocation()
    const isNonMobile = useMediaQuery('(min-width:600px)')
    const classes = useStyles()

    return (
        <>
            {pathname === '/login' || pathname === '/register' ? (
                <>
                    <Outlet/>
                </>
            ) : (
                <Box
                    display={isNonMobile ? 'flex' : 'block'}
                    width='100%'
                    height='100%'
                >
                    <SidebarComponent
                        isNonMobile={isNonMobile}
                        drawerWidth='250px'
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                    <Box className={classes.mainSection}>
                        <TopBarComponent
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />
                        <Outlet/>
                    </Box>
                </Box>
            )}
        </>
    );


};

export default LayouteComponent;