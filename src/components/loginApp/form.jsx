import Login from "./login";
import "./loginStyle.css"
const Form = () => {
    let isRegistered = true;
    return (
        <div>
            <Login isRegistered = {isRegistered}/>
        </div>
    )
}
export default Form;