import {useNavigate} from "react-router-dom";

const SingleAssetPage = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Single Asset Page</h1>
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
    );
};

export default SingleAssetPage;