import { useState } from "react";
function Input(props) {
    const [inputText, setInputText] = useState("");
    function handleChange(e) {
        setInputText(e.target.value);
    }
    return (
        <form onSubmit={(e) => {
            props.itemAdd(inputText);
            setInputText("");
            e.preventDefault();
        }
        } className={props.className}>
            <input type="text" onChange={handleChange} value={inputText} spellCheck="false" className="input" required/>
            <button className="btn">add</button>
        </form>
    )
}
export default Input;