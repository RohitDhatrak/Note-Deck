import React from "react";

function Notes({ notes }) {
    return (
        <div className="notes-container">
            <div>
                <h1>Pinned</h1>
                {notes
                    .filter((note) => note.pinned)
                    .map((note) => (
                        <div
                            style={{
                                backgroundColor: `${note.colour}`,
                            }}
                            className="note"
                        >
                            <div>{note.title}</div>
                            <p>{note.body}</p>
                        </div>
                    ))}
            </div>
            <div>
                <h1>Others</h1>
                {notes
                    .filter((note) => !note.pinned)
                    .map((note) => (
                        <div
                            style={{
                                backgroundColor: `${note.colour}`,
                            }}
                            className="note"
                        >
                            <div>{note.title}</div>
                            <p>{note.body}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Notes;
