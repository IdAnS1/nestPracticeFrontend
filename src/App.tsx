import Home from "./components/home";
import {Route, Routes} from "react-router-dom";
import PrivateRoue from "./utils/router/privateRoue";
import AuthRootComponent from "./components/auth";

function App() {

    return (
        <div className='app'>
            <Routes>
                <Route element={<PrivateRoue/>}>
                    <Route path='/' element={<Home/>}/>
                </Route>
                <Route path='/login' element={<AuthRootComponent/>}/>
                <Route path='/register' element={<AuthRootComponent/>}/>
            </Routes>
        </div>
    )
}

export default App
