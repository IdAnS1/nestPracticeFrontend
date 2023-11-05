import {ILayout} from "../../common/types/layout";
import TopBarComponent from "../top-bar";
import {useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import SidebarComponent from "../sidebar";
import {useState} from "react";
import {useStyles} from "./styles";

const LayouteComponent = ({children}: ILayout) => {
    const [isOpen, setIsOpen] = useState(true)
    const {pathname} = useLocation()
    const isNonMobile = useMediaQuery('(min-width:600px)')
    const classes = useStyles()

    return (
        <>
            {pathname === '/login' || pathname === '/register' ? (
                <>
                    {children}
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
                        <TopBarComponent/>
                        {children}
                    </Box>
                </Box>
            )}
        </>
    );


};

export default LayouteComponent;