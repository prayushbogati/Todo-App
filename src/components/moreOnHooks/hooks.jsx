import "./hookStyle.css"
import Input from "../loginApp/input";
import { useState } from "react";
function Hooks() {
    const [isMouseOver, setMouseOver] = useState(false);
    // const [fName, setFName] = useState("");
    // const [lName, setLName] = useState("");
    // const [email, setEmail] = useState("");

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    })

    function handleMouseOver() {
        setMouseOver(true);
    }
    function handleMouseOut() {
        setMouseOver(false);
    }
    // function changeFName(e){
    //     setFName(e.target.value);
    // }
    // function changeLName(e){
    //     setLName(e.target.value);
    // }
    // function changeEmail(e){
    //     setEmail(e.target.value);
    // }

    function handleChange(e) {
        const { value, name } = e.target;
        //     else if(name === "lName") setContact({lName: value});
        //    else if(name === "email") setContact({email: value});

        setContact((prevValue) => {
            // console.log(prevValue);
            // if (name === "fName") return ({ fName: value, lName: prevValue.lName, email: prevValue.email });
            // else if (name === "lName") return ({ fName: prevValue.fName, lName: value, email: prevValue.email });
            // else if (name === "email") return ({ fName: prevValue.fName, lName: prevValue.lName, email: value });
            return ({
                ...prevValue,
                [name]: value
            })

        })
    }

    return (
        <div>
            <h1 className="hello">hello {contact.fName} {contact.lName}</h1>
            <p className="para">{contact.email}</p>
            <form action="" className="form">
                <Input
                    type="text"
                    name="fName"
                    placeholder="Enter first name"
                    spellCheck="false"
                    onChange={handleChange}
                    value={contact.fName}
                />
                <Input
                    type="text"
                    name="lName"
                    placeholder="Enter last name"
                    spellCheck="false"
                    onChange={handleChange}
                    value={contact.lName}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    spellCheck="false"
                    onChange={handleChange}
                    value={contact.email}
                />
                <button
                    className="btn"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={
                        {
                            backgroundColor: isMouseOver ? "rgb(12, 239, 239)" : "rgb(20, 203, 203)",
                            color: isMouseOver ? "black" : "white"
                        }
                    }>submit</button>
            </form>
        </div>
    )
}
export default Hooks;