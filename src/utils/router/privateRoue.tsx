import {Navigate, Outlet} from 'react-router-dom'

function PrivateRoue() {

    const auth = true

    return (
        auth ? <Outlet/> : <Navigate to="login"/>
    );
}

export default PrivateRoue;