import React from "react";

function NoteTitle({ note, setNote }) {
    return (
        <div>
            <input
                style={{ display: "inline" }}
                placeholder="Title"
                type="text"
                onChange={(e) => {
                    console.log(note);
                    setNote({ ...note, title: e.target.value });
                }}
                value={note.title}
            />
            <button
                style={{ display: "inline" }}
                onClick={() => setNote({ ...note, pinned: !note.pinned })}
            >
                {note.pinned ? "Unpin" : "Pin"}
            </button>
        </div>
    );
}

export default NoteTitle;
