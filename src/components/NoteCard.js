import React from "react";
import NoteFooter from "./NoteFooter";

function NoteCard({
    labels,
    colours,
    setModal,
    setEditNote,
    others,
    setOthers,
    pinned,
    setPinned,
    note,
    togglePin,
}) {
    function displayModal(e) {
        setModal(true);
        setEditNote(note);
    }

    return (
        <div
            style={{
                backgroundColor: `${note.colour}`,
            }}
            className="note"
            onClick={displayModal}
        >
            <div>{note.title}</div>
            <button
                onClick={(e) => {
                    togglePin(note);
                    e.stopPropagation();
                    // note.pinned
                    //     ? togglePin([...pinned], [...others])
                    //     : togglePin([...others], [...pinned]);
                }}
            >
                {note.pinned ? "Unpin" : "Pin"}
            </button>
            <p>{note.body}</p>
            <NoteFooter
                note={note}
                labels={labels}
                colours={colours}
                pinned={pinned}
                setPinned={setPinned}
                others={others}
                setOthers={setOthers}
            />
        </div>
    );
}

export default NoteCard;
