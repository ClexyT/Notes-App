import React from 'react'
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
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleNoteChange} />
        <button type="submit">Add Note</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  )
}

export default AddNote

