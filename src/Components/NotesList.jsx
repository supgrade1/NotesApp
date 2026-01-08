import Note from './Note.jsx'
import './NoteList.css'
import NoteCard from './NoteCard.jsx';
function NotesList({notes,onDelete}){
    return(
        <div className="NotesList">
            <h4 className='noterec'>NOTES RECORDS</h4>
            <p>Note Count :{notes.length}</p>
            
            {
                notes.map((note)=>(
                    <NoteCard key={note.id} note={note} onDelete={onDelete}></NoteCard>
                ))
            }
        </div>
    )
}

export default NotesList;