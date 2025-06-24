import Input from "./input"
import List from "./list";
import { useState } from "react";
import "./todoStyle.css"
function TodoApp() {
    const [data, setData] = useState([]);
    function addData(inputText) {
        setData((prevData) => {
            return [...prevData, inputText];
        })
    }
    function deleteData(id) {
        setData((prevData) => {
            return prevData.filter((data, index) => {
                return index !== id;
            })
        })
    }
    return (
        <div className="container">
            <h1 className="title">todo list</h1>
            <Input itemAdd={addData} className="form" />
            <ul className="list" >
                {data.map((item, index) => (<List info={item} key={index} id={index} onChecked={deleteData} />))}
            </ul>
        </div>
    )
}
export default TodoApp;