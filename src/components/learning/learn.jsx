import "./style_learn.css"
import { useState } from "react";
function Hello() {
    let img = "https://picsum.photos/300"
    let paraStyle = {
        color: "red", 
        fontSize: "larger",
        border: "1px solid black",
        padding: "5px"
    }
    const [Color, setParaStyle] = useState({ color: `${paraStyle.color}` });
    return (
        <div className="bigDiv">
            <h1 className="heading" contentEditable="true" spellCheck="false">hello</h1>
            <p>this is a parapraph</p>
            <div className="images">
                <img src={img + "/?grayscale"} alt="" />
                <img src="./1.jpeg" alt="" />
                <img src="./2.jpeg" alt="" />
            </div>
            {/* using inline css */}
            <p style={Color}>test paragraph</p>
            <button onClick={() => { setParaStyle({ color: "green" }) }}>Click</button>
        </div>
    )
}
export default Hello