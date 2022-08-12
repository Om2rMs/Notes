import React, { setState, useState } from "react";
import './App.css'
import NoteList from "../NoteList/NoteList";
import { nanoid } from 'nanoid'
import Search from "../Search/Search";




const App = () => {

    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []
    )

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    const addNote = (text) => {
        const date = new Date();
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString(),
        };
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }

    const [searchText, setSearchText] = useState('');


    const deleteNote = (id) => {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
    }
    return (
        <div className="container">
            <Search searchNote={setSearchText} />
            <NoteList
                notes={notes.filter((note) =>
                    note.text.includes(searchText)
                )}
                handleAddNote={addNote}
                deleteNote={deleteNote} />
        </div>
    )
}



export default App;