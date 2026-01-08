import './NoteCard.css'
const NoteCard = ({note,onDelete}) => {
  return (
    <div className='note-card'>
        <div className="note-header">
            <h3>{note.title}</h3>
            <span className="notCa" onClick={()=>onDelete(note.id)}>X</span>
        </div>
        <p>{note.description}</p>
    </div>
  )
}

export default NoteCard