import { useState } from "react";
function CountApp() {
    const [value, setValue] = useState("")
    return (
        <>
            <input type="text" value={value} onChange={(e)=>{
                setValue(e.target.value)
            }}/>
            <h2>{value}</h2>
        </>
    )
}
export { CountApp }