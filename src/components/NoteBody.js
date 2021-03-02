import React from "react";

function NoteBody({ note, setNote, setInpFlag }) {
    return (
        <textarea
            className="note-taker-body"
            placeholder="Take a note..."
            type="text"
            onClick={() => (setInpFlag ? setInpFlag(true) : "")}
            onChange={(e) => {
                console.log(note);
                setNote({ ...note, body: e.target.value });
            }}
            value={note.body}
        />
    );
}

export default NoteBody;
