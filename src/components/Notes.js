import React from "react";

function Notes({ pinned, others, filter }) {
    if (filter !== "All") {
        others = others.filter((key) => key.label === filter);
        pinned = pinned.filter((key) => key.label === filter);
    }

    function togglePin(note) {}

    function displayNotes(arrList) {
        return (
            <div>
                {arrList.map((note) => (
                    <div
                        style={{
                            backgroundColor: `${note.colour}`,
                        }}
                        className="note"
                    >
                        <div>{note.title}</div>
                        <button onClick={() => togglePin(note)}>
                            {note.pinned ? "Unpin" : "Pin"}
                        </button>
                        <p>{note.body}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="notes-container">
            <h1>Pinned</h1>
            {displayNotes(pinned)}
            <h1>Others</h1>
            {displayNotes(others)}
        </div>
    );
}

export default Notes;
