import React from "react";
import NoteTitle from "../Helpers/NoteTitle";
import NoteBody from "../Helpers/NoteBody";
import NoteFooter from "../Helpers/NoteFooter/NoteFooter";

function NewNote({
    labelList,
    others,
    setOthers,
    pinned,
    setPinned,
    note,
    setNote,
    newNoteFlag,
    setNewNoteFlag,
    addNote,
}) {
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
                <NoteFooter
                    note={note}
                    labelList={labelList}
                    pinned={pinned}
                    setPinned={setPinned}
                    others={others}
                    setOthers={setOthers}
                    setNewNoteFlag={setNewNoteFlag}
                    setNote={setNote}
                />
                <button className="close" onClick={addNote}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default NewNote;
