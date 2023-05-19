import { useNavigate } from "react-router-dom";

export const Apple = () => {
    const Navigat =useNavigate();
    const onHomePageButtonClick=()=>{
        Navigat('/');
    }
    return (<div>
        <p>Welcome to Apple Page</p>
        <button onClick={onHomePageButtonClick}>Navigate to Home page</button>
    </div>);
}