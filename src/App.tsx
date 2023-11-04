import Home from "./components/home";
import {Route, Routes} from "react-router-dom";
import PrivateRoue from "./utils/router/privateRoue";
import {ColorModeContext, useMode} from './theme/index'
import {CssBaseline, ThemeProvider} from "@mui/material";
import LayouteComponent from "./components/layout";
import AuthRootComponent from "./components/auth";

function App() {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <LayouteComponent>
                    <div className='app'>
                        <Routes>
                            <Route element={<PrivateRoue/>}>
                                <Route path='/' element={<Home/>}/>
                            </Route>
                            <Route path='/login' element={<AuthRootComponent/>}/>
                            <Route path='/register' element={<AuthRootComponent/>}/>
                        </Routes>
                    </div>
                </LayouteComponent>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
