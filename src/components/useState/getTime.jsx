import "./time.css"
import { useState } from "react"
const GetTime = () => {
    let now = new Date().toLocaleTimeString();
    let [curTime, setTime] = useState(now);
    const time = () => {
        let newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }
    setInterval(time, 1000);
    return (
        <div className="timeContainer">
            <h1 className="head">{curTime}</h1><br />
            <button onClick={time} className="btn">current time</button>
        </div>
    )
}
export default GetTime;