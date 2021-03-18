import React from "react";
import { NoteTitle } from "../Helpers/NoteTitle";
import { NoteBody } from "../Helpers/NoteBody";
import { NoteFooter } from "../Helpers/NoteFooter";
import { useNotes } from "../../ContextProviders/NotesContext";

export function NewNote() {
    const { note, setNote, addNote, newNoteFlag, setNewNoteFlag } = useNotes();

    return (
        <div
            className="note-taker"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: `${note.colour}` }}
        >
            <div style={{ display: newNoteFlag ? "inline" : "none" }}>
                <NoteTitle note={note} setNote={setNote} />
            </div>

            <NoteBody
                note={note}
                setNote={setNote}
                setNewNoteFlag={setNewNoteFlag}
            />

            <div
                className="footer"
                style={{ display: newNoteFlag ? "inline" : "none" }}
            >
                <NoteFooter note={note} setNote={setNote} />
                <button className="close" onClick={addNote}>
                    Close
                </button>
            </div>
        </div>
    );
}
