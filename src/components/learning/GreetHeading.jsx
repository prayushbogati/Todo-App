import "./challenge10.css"

function Greet() {
    let Color = {
        color: ""
    }
    let greeting;
    let date = new Date();
    date = date.getHours();
    if (date >= 0 && date < 12) {
        greeting = "Good Morning";
        Color.color = "red"
    }
    else if (date >= 12 && date < 18) {
        greeting = "Good Afternoon";
        Color.color = "green"
    }
    else {
        greeting = "Good Evening"
        Color.color = "blue"
    }
    return (
        <div>
            <h1 className="heading" style={Color}>{greeting}</h1>
        </div>
    )
}
export default Greet;