
import { useState } from 'react'
const AddNote = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");
    const handleNoteChange = (event) => {
        setNewNote(event.target.value);
    }
    const addNote = (event) => {
        event.preventDefault();
        setNotes([...notes, newNote]);
        setNewNote("");
    }
    
  return (
    <div>
    <button>
        Add Note
    </button>

      <form onSubmit={addNote}>
        <input 
        className='bg-transparent border-white'
        type="text" 
        value={newNote} 
        onChange={handleNoteChange} 
        />
        <button type="submit">Send Note</button>
      </form>
      <div>
        {notes.map((note) => (
          <div key={note}>{note}</div>
        ))}
      </div>
    </div>
  )
}

export default AddNote

