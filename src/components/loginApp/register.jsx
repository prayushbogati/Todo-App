import Input from "./input";
const Register = () => {
    return (
        <form className="form">
            <Input type = "text" placeholder="username" />
            <Input type = "text" placeholder="password" />
            <Input type = "text" placeholder="confirm password" />
            <button className="btn" type="submit">Register</button>
        </form>
    )
}
export default Register;