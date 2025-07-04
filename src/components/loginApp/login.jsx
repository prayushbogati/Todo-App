import Input from "./input";
const Login = (props) => {
    return (
        <form className="form">
            <Input type="text" placeholder="username" />
            <Input type="text" placeholder="password" />
            {(!props.isRegistered) && <Input type="text" placeholder="confirm password" />}
            {/* {(props.isRegistered == false) && <Input type = "text" placeholder="confirm password" />} */}
            {/* {(props.isRegistered == false)? <Input type = "text" placeholder="confirm password"/> : null} */}
            <br /> <button className="btn" type="submit">
                {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
    )
}
export default Login; 