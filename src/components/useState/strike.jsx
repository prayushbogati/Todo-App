const Strike = () =>{
    function Strike(){
        document.getElementById('root').style.textDecoration = "line-through";
    }
    function UnStrike(){
        document.getElementById('root').style.textDecoration = null;
    }
    return(
        <div>
            <h1>task</h1>
            <button onClick={Strike}>Strike</button>
            <button onClick={UnStrike}>UnStrike</button>
        </div>
    )
}
export default Strike;