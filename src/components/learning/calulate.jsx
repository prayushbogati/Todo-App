import * as Calculator from "./calculator"
function Calculate() {
    return (
        <ul>
            <li>{Calculator.Add(1, 2)}</li>
            <li>{Calculator.Sub(2, 3)}</li>
            <li>{Calculator.Multiply(7, 2)}</li>
            <li>{Calculator.Divide(5, 2)}</li>
        </ul>
    )
}
export default Calculate;