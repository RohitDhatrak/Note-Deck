import React, { useRef, useEffect } from "react";

export function NoteBody({ note, setNote, setNewNoteFlag }) {
    let textAreaRef = useRef(null);

    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "20px";
            textAreaRef.style.height = textAreaRef.scrollHeight + "px";
        }
    }, [note]);

    function expandNewNote() {
        if (setNewNoteFlag !== undefined) {
            // i.e component is being used in New Note
            setNewNoteFlag(true);
        }
    }

    function saveNoteBody(e) {
        expandNewNote();
        setNote((currentNote) => ({
            ...currentNote,
            body: e.target.value,
            lastEdited: Date.now(),
        }));
    }

    return (
        <textarea
            className="note-taker-body"
            placeholder="Take a note..."
            type="text"
            autoFocus
            onClick={expandNewNote}
            onChange={saveNoteBody}
            ref={(ref) => (textAreaRef = ref)}
            value={note.body}
        />
    );
}
