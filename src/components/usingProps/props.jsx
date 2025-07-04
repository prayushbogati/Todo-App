import Card from "./card";
import Contacts from "./contacts";
import "./cardStyle.css"
import Avatar from "./Avatar";
const Props = () => {
    const createCard = (contact) => {
        return (
            <Card
                key = {contact.id}
                keyProp = {contact.id}
                name = {contact.name}
                img = {contact.img}
                tel = {contact.tel}
                email = {contact.name}
            />
        )
    }
    return (
        <div>
            <h1>Contacts</h1><br />
            <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NGEQDekk2BwsllLjk4tcIM_BPIzXECdsg&s" />

            {Contacts.map(createCard)}

            {/* <Card
                name={Contacts[0].name}
                img={Contacts[0].img}
                tel={Contacts[0].tel}
                email={Contacts[0].email} />
            <br />
            <Card
                name={Contacts[1].name}
                img={Contacts[1].img}
                tel={Contacts[1].tel}
                email={Contacts[1].email} />
            <br />
            <Card
                name={Contacts[2].name}
                img={Contacts[2].img}
                tel={Contacts[2].tel}
                email={Contacts[2].email} /> */}
        </div>
    )
}
export default Props;