import "./keeperStyle.css"
import Header from "./Header";
import NoteCard from "./noteCard";
import Footer from "./Footer";
import Form from "./form";
import { useState } from "react";
const MyApp = () => {
    const [notes, setNotes] = useState([])
    function addNote(inputValue) {
        setNotes(prevArr => {
            return [...prevArr, inputValue]
        });
    }
    function deleteNote(u_id) {
        setNotes(prevArr => {
            return prevArr.filter((array, id) => {
                return id !== u_id;
            })
        })
    }
    return (
        <div>
            <Header />
            <Form noteAdd={addNote} />
            <div className="noteContainer">
                {notes.map((note, id) => (
                    <NoteCard
                        noteRemoval={deleteNote}
                        key={id}
                        id={id}
                        title={note.title}
                        content={note.content}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}
export default MyApp;