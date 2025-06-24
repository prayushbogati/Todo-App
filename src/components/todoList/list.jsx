function List(props) {
    return (
        <div onClick={() => { props.onChecked(props.id) }}>
            <li>{props.info}</li>
        </div>
    )
}
export default List;