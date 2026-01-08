import { useEffect, useState } from 'react'
import './App.css'
import NotesList from './Components/NotesList.jsx';
import Note from './Components/Note.jsx'

function App() {

    const [notes,setNotes]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      },1500)
    },[])

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

    {loading && <p className="loading">Loading notes...</p>}

     {!loading && notes.length === 0 && (
                <p className="empty-state">
                    No notes available. Add your first note.
                </p>
            )}
      
    {!loading && notes.length>0&&( <NotesList notes={notes} onDelete={deleteNote}></NotesList>)}
   </div>
   </>
  )
}

export default App
