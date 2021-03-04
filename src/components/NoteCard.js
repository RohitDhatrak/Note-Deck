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
            className="card"
            style={{
                backgroundColor: `${note.colour}`,
            }}
            onClick={displayModal}
        >
            <div className="card-title">{note.title}</div>
            <button
                className="card-pin-button"
                onClick={(e) => {
                    togglePin(note);
                    e.stopPropagation();
                    // note.pinned
                    //     ? togglePin([...pinned], [...others])
                    //     : togglePin([...others], [...pinned]);
                }}
            >
                {note.pinned ? (
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        style={{
                            transform: "scale(1.5)",
                            backgroundColor: "transparent",
                        }}
                    >
                        <path
                            d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z"
                            fill="currentColor"
                        ></path>
                    </svg>
                ) : (
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        style={{
                            transform: "scale(1.5)",
                            backgroundColor: "transparent",
                        }}
                    >
                        <path
                            d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2m-7.2 2l1.2-1.2V4h4v8.8l1.2 1.2H8.8z"
                            fill="currentColor"
                        ></path>
                    </svg>
                )}
            </button>
            <p className="card-body">{note.body}</p>
            <div className="card-footer">
                <NoteFooter
                    className="card-footer"
                    note={note}
                    labels={labels}
                    colours={colours}
                    pinned={pinned}
                    setPinned={setPinned}
                    others={others}
                    setOthers={setOthers}
                />
            </div>
        </div>
    );
}

export default NoteCard;
