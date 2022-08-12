import React, { setState, useState } from "react";
import './../Note/Note.css'
import { MdAddCircle } from 'react-icons/md'



const AddNote = ({ handleAddNote }) => {

    const [noteText, setNoteText] = useState('');
    const limit = 800;


    const handleChange = (e) => {
        if (limit - e.target.value.length >= 0) {
            setNoteText(e.target.value);

        }
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className="note">
            <div className="textarea-container">
                <textarea
                    className="textarea"
                    placeholder="ابدا ملاحظتك"
                    value={noteText}
                    onChange={handleChange}
                >
                </textarea>
            </div>
            <div className="note-footer">
                <small className="remain">حرف {limit - noteText.length}</small>
                <MdAddCircle
                    onClick={handleSaveClick}
                    className="save"
                    size="1.6em" />
            </div>
        </div>
    )
}




export default AddNote;