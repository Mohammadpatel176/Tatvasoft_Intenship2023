import { useNavigate } from "react-router-dom";
import AppStyle from './AppStyle.module.css';

export const Apple = () => {
    const Navigat = useNavigate();
    const onHomePageButtonClick = () => {
        Navigat('/');
    }
    const alt = () => {
        alert("Please choose another button");
    }
    return (<div>
        <p>Welcome to Apple Page</p>
        <button onClick={onHomePageButtonClick}>Navigate to Home page</button>
        <button className={AppStyle.error} onClick={alt}>error button</button>
    </div>);
}