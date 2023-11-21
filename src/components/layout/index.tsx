import TopBarComponent from "../top-bar";
import {Outlet, useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import SidebarComponent from "../sidebar";
import {FC, useEffect, useState} from "react";
import {useStyles} from "./styles";
import {useAppDispatch} from "../../utils/hook";
import {getPublicUser} from "../../store/thunks/auth";

const LayouteComponent: FC = () => {
    const [isOpen, setIsOpen] = useState(true)
    const {pathname} = useLocation()
    const isNonMobile = useMediaQuery('(min-width:760px)')
    const isNonMobilePl = useMediaQuery('(min-width:1030px)')
    const classes = useStyles()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getPublicUser())
    }, [dispatch])

    return (
        <>
            {pathname === '/login' || pathname === '/register' ? (
                <>
                    <Outlet/>
                </>
            ) : (
                <Box
                    display={isNonMobilePl ? 'flex' : 'block'}
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
                            isNonMobile={isNonMobile}
                        />
                        <Outlet/>
                    </Box>
                </Box>
            )}
        </>
    );


};

export default LayouteComponent;