import { useState } from 'react'
import './App.css'
import NotesList from './Components/NotesList.jsx';
import Note from './Components/Note.jsx'

function App() {

    const [notes,setNotes]=useState([]);

    const addNote=(note)=>{
      setNotes((prevNotes)=>[...prevNotes,note])
    };

    const deleteNote=(id)=>{
      setNotes((prev)=>prev.filter((note)=>note.id!==id))
    }

  return (
   <>
   <div className="app-container">
    <Note onAddNote={addNote}></Note>
      
    {notes.length>0&& <NotesList notes={notes} onDelete={deleteNote}></NotesList>}
   </div>
   </>
  )
}

export default App
