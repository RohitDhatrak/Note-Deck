import React from "react";
import NoteTitle from "./NoteTitle";
import NoteBody from "./NoteBody";
import NoteFooter from "./NoteFooter";

function AddNote({
    colours,
    labels,
    others,
    setOthers,
    pinned,
    setPinned,
    note,
    setNote,
    inpFlag,
    setInpFlag,
    addNote,
}) {
    return (
        <div className="note-taker" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: inpFlag ? "inline" : "none" }}>
                <NoteTitle note={note} setNote={setNote} />
            </div>

            <NoteBody note={note} setNote={setNote} setInpFlag={setInpFlag} />

            <div
                className="footer"
                style={{ display: inpFlag ? "inline" : "none" }}
            >
                <NoteFooter
                    note={note}
                    labels={labels}
                    colours={colours}
                    pinned={pinned}
                    setPinned={setPinned}
                    others={others}
                    setOthers={setOthers}
                    setInpFlag={setInpFlag}
                    setNote={setNote}
                />
                <button className="close" onClick={addNote}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default AddNote;
