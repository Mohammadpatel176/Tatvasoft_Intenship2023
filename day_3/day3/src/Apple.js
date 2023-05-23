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
        <input tupe="text" placeholder="name">Name</input>
        <input type="email" placeholder="email">email</input>
        <button onClick={onHomePageButtonClick}>Navigate to Home page</button>
        <button className={AppStyle.error} onClick={alt}>error button</button>
    </div>);
}