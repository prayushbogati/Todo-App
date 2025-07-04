const EmojiCard = (props) => {
    return (
        <div className="card">
            <h1>{props.logo}</h1>
            <h2>{props.name}</h2>
            <p>{props.meaning}</p>
        </div>
    )
}
export default EmojiCard;