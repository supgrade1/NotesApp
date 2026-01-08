import { useState } from 'react';
import './Note.css'

function Note({onAddNote}){
    let [title,setTitle]=useState("");
    let [description,setDescription]=useState("");
    let [error,setError]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(title.trim()===""||description.trim()==="")
        {
            setError("Please fill all the fields properly");
            return;
        }

        onAddNote({
            id: Date.now(),
            title,
            description,
        });

        setError("");
        alert("form Submitted Successfully");
        setTitle("");
        setDescription("");
    };

    return(
        <div className="Note" style={{color:"white"}}>
            <h3 className='inputNote'><li>Note Inputs</li></h3>
            <hr></hr> 
            <div className="inputForm">
            <form onSubmit={handleSubmit} >

                <h4><label htmlFor="title">Title</label></h4>
                <input type="text" placeholder="Enter note title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}></input>    

                <h4><label htmlFor="Description">Description</label></h4>
                <textarea id="Description" placeholder="Enter Details" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>      

                 {error && <p className="error">{error}</p>}

                <div className="btn">
                    <button type="submit">+ Submit Entry</button> 
                </div> 
            </form>
            
            </div>
        </div>
    )
}

export default Note;