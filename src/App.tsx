import Home from "./pages/home";
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import {ColorModeContext, useMode} from './theme'
import {CssBaseline, ThemeProvider} from "@mui/material";
import LayouteComponent from "./components/layout";
import AuthRootComponent from "./components/auth";
import NewsComponent from "./pages/news";
import WatchlistComponent from "./pages/watchlist";
import SettingsComponent from "./pages/settings";
import SingleAssetPage from "./pages/single-asset";

function App() {
    const [theme, colorMode] = useMode()

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className='app'>
                    <Routes>
                        <Route element={<LayouteComponent/>}>
                            <Route element={<PrivateRoute/>}>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/watchlist' element={<WatchlistComponent/>}/>
                                <Route path='/news' element={<NewsComponent/>}/>
                                <Route path='/settings' element={<SettingsComponent/>}/>
                                <Route path='/single/:id' element={<SingleAssetPage/>}/>
                            </Route>
                            <Route path='/login' element={<AuthRootComponent/>}/>
                            <Route path='/register' element={<AuthRootComponent/>}/>
                        </Route>
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
