function TextArea(props) {

    return (
        <textarea className="textArea"
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onClick={props.onClick}
            spellCheck={props.spellCheck}
            value={props.value}
            name={props.name}
            rows = {props.rows}
            // required
        />
    )
}
export default TextArea;