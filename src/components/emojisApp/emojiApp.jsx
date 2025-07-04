import EmojiCard from "./emojiCard";
import "./emojiStyle.css";
import emojis from "./emojis";
const EmojiApp = () => {
    const getCard = (emojis) => {
        return <EmojiCard
            key={emojis.id}
            logo={emojis.logo}
            name={emojis.name}
            meaning={emojis.meaning}
        />
    }
    return (
        <div>
            <h1 className="heading">emojipedia</h1>
            <div className="cardContainer">
                {emojis.map(x => (
                    <EmojiCard
                        key={x.id}
                        logo={x.logo}
                        name={x.name}
                        meaning={x.meaning}
                    />
                ))}
                {/* {emojis.map(getCard)} */}
            </div>
        </div>
    )
}
export default EmojiApp;