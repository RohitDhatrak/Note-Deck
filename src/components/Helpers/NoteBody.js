import React, { useRef, useEffect } from "react";
import { useNotes } from "../../ContextProviders/NotesContext";

function NoteBody({ note, setNote }) {
    const { setNewNoteFlag } = useNotes();
    let textAreaRef = useRef(null);

    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "20px";
            textAreaRef.style.height = textAreaRef.scrollHeight + "px";
        }
    }, [note]);

    return (
        <textarea
            className="note-taker-body"
            placeholder="Take a note..."
            type="text"
            autoFocus
            onClick={() => (setNewNoteFlag ? setNewNoteFlag(true) : null)}
            onChange={(e) => {
                setNewNoteFlag(true);
                setNote({ ...note, body: e.target.value });
            }}
            ref={(ref) => (textAreaRef = ref)}
            value={note.body}
        />
    );
}

export default NoteBody;
