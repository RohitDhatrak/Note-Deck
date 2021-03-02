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
    setModal,
    addNote,
}) {
    return (
        <div className="modal">
            <NoteTitle note={editNote} setNote={setEditNote} />

            <NoteBody note={editNote} setNote={setEditNote} />

            <NoteFooter
                note={editNote}
                labels={labels}
                colours={colours}
                pinned={pinned}
                setPinned={setPinned}
                others={others}
                setOthers={setOthers}
                setModal={setModal}
            />
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
