import React, { useState } from "react";

function EditComponent({
    pinned,
    setPinned,
    others,
    setOthers,
    labels,
    colours,
    editNote,
    setModal,
}) {
    const [note, setNote] = useState({ ...editNote });

    function addNote() {
        if (note.title !== "" && note.body !== "") {
            if (note.pinned) {
                const noteIdx = pinned.findIndex(
                    (key) => key.uuid === note.uuid
                );
                pinned.splice(noteIdx, 1, note);
                setPinned([...pinned]);
            } else {
                const noteIdx = others.findIndex(
                    (key) => key.uuid === note.uuid
                );
                others.splice(noteIdx, 1, note);
                setOthers([...others]);
            }
        }
    }

    return (
        <div className="modal">
            <div>
                <input
                    style={{ display: "inline" }}
                    placeholder="Title"
                    type="text"
                    onChange={(e) =>
                        setNote({ ...note, title: e.target.value })
                    }
                    value={note.title}
                />
                <button
                    style={{ display: "inline" }}
                    onClick={() => setNote({ ...note, pinned: !note.pinned })}
                >
                    {note.pinned ? "Unpin" : "Pin"}
                </button>
            </div>

            <textarea
                className="note-taker-body"
                placeholder="Take a note..."
                type="text"
                onChange={(e) => setNote({ ...note, body: e.target.value })}
                value={note.body}
            />

            <div className="note-taker-footer">
                <select
                    onChange={(e) =>
                        setNote({ ...note, label: e.target.value })
                    }
                    value={note.label}
                >
                    {labels.map((label) => (
                        <option>{label}</option>
                    ))}
                </select>
                <select
                    onChange={(e) =>
                        setNote({ ...note, colour: e.target.value })
                    }
                    value={note.colour}
                >
                    {Object.keys(colours).map((colour) => (
                        <option>{colour}</option>
                    ))}
                </select>
                <button
                    className="close"
                    onClick={() => {
                        addNote();
                        setModal(false);
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default EditComponent;
