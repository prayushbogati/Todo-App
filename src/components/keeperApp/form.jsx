import TextArea from "./textArea";
import Input from "../loginApp/input";
import { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';
function Form(props) {
    const [isClicked, setClick] = useState(false);
    const [input, setInput] = useState({
        title: "",
        content: ""
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setInput((prevValue) => {
            return { ...prevValue, [name]: value }
        })
    }
    function handleClick() {
        setClick(true);
    }
    return (
        <form onSubmit={
            (e) => {
                { props.noteAdd(input) }
                e.preventDefault();
                setInput({
                    title: "",
                    content: ""
                });
            }
        }>
            <div className="inputContainer">
                {isClicked && (<Input placeholder="enter note title" name="title" value={input.title} onChange={handleChange} spellCheck="false" />)}
                <TextArea placeholder="enter note content" name="content" value={input.content} onChange={handleChange} onClick={handleClick} rows={isClicked ? "3" : "1"} />
                
                {isClicked && <div className="btn" ><Zoom in={true} ><Fab type="submit" ><AddIcon />
                </Fab></Zoom></div>}
            </div>
        </form >
    )
}
export default Form;