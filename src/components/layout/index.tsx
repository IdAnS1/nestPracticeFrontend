import {ILayout} from "../../common/types/layout";
import TopBarComponent from "../top-bar";
import {useLocation} from "react-router-dom";
import {Box, useMediaQuery} from "@mui/material";
import SidebarComponent from "../sidebar";
import {useState} from "react";

const LayouteComponent = ({children}: ILayout) => {
    const [isOpen, setIsOpen] = useState(true)
    const {pathname} = useLocation()
    const isNonMobile = useMediaQuery('(min-width:600px)')

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
                        drawerWidth='250'
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                    <Box>
                        <TopBarComponent/>
                        {children}
                    </Box>
                </Box>
            )}
        </>
    );


};

export default LayouteComponent;