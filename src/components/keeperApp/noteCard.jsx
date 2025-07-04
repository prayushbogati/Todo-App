import DeleteIcon from '@mui/icons-material/Delete';
const NoteCard = (props) => {
    return (
        <div className="note">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <button onClick={()=>{props.noteRemoval(props.id)}} className="del-btn">
                <DeleteIcon/>
            </button>
        </div>
    )
}
export default NoteCard;