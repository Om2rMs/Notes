import React from "react";
import './NoteList.css'
import Note from "../Note/Note";
import AddNote from "../AddNote/AddNote";


const NoteList = ({ notes, handleAddNote, deleteNote }) => {
    return (

        <div className="notelist-container">
            {notes.map((note) => (
                <Note
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    deleteNote={deleteNote} />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>

    )
}

export default NoteList;