import React from "react";
import NoteTitle from "./NoteTitle";
import NoteBody from "./NoteBody";
import NoteFooter from "./NoteFooter";

function EditComponent({
    pinned,
    setPinned,
    others,
    setOthers,
    labels,
    colours,
    editNote,
    setEditNote,
    modal,
    setModal,
    addNote,
}) {
    return (
        <div
            className="note-taker"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: `${editNote.colour}` }}
        >
            <NoteTitle note={editNote} setNote={setEditNote} modal={modal} />

            <NoteBody note={editNote} setNote={setEditNote} modal={modal} />

            <div className="footer">
                <NoteFooter
                    note={editNote}
                    setNote={setEditNote}
                    labels={labels}
                    colours={colours}
                    pinned={pinned}
                    setPinned={setPinned}
                    others={others}
                    setOthers={setOthers}
                    setModal={setModal}
                />
            </div>
            <button
                className="close"
                onClick={() => {
                    addNote(editNote);
                    setModal(false);
                }}
            >
                Close
            </button>
        </div>
    );
}

export default EditComponent;
