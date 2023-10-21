interface IGreeting {
    name: string
    age?: number
}

const Greeting = ({name}: IGreeting) => {
    
    return (
        <div>
            <h1>Greeting{name}</h1>
        </div>
    );
};

export default Greeting;