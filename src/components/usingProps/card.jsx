import Avatar from "./Avatar";
import Details from "./details";
const Card = (props) => {
    return (
        <div className="card">
            <p className="id">{props.keyProp}</p>
            <h3>{props.name}</h3>
            <Avatar img={props.img}/>
            <div className="contact">
            <Details detailInfo= {props.tel}/>
            <Details detailInfo= {props.email}/>
            </div>
        </div>
    )
}
export default Card;