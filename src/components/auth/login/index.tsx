import Greeting from "./Greeting";

const LoginPage = () => {

    const name = "Viva"
    return (
        <div>
            <h1>Login page</h1>
            <Greeting name={name}/>
        </div>
    );
};

export default LoginPage;