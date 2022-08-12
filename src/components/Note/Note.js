import React from "react";
import './Note.css'
import { MdOutlineCancel } from 'react-icons/md'


const Note = ({ id, text, date, deleteNote }) => {
    return (
        <div className="note">
            <div className="textarea-container">
                <textarea
                    className="textarea past"
                    value={text}
                >
                </textarea>
            </div>
            <div className="note-footer">
                <small className="remain">بتاريخ {date}</small>
                <MdOutlineCancel
                    onClick={() => deleteNote(id)}
                    className="delete-icon"
                    size="1.6em" />
            </div>
        </div>

    )
}


export default Note;