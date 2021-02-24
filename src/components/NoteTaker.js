import React, { useState } from "react";
import { v4 } from "uuid";

function NoteTaker({ colours, labels, others, setOthers, pinned, setPinned }) {
    const [inpFlag, setInpFlag] = useState(false);
    const [note, setNote] = useState({
        uuid: v4(),
        title: "",
        body: "",
        label: "",
        colour: "#fff",
        pinned: false,
    });

    function addNote() {
        if (note.title !== "" && note.body !== "") {
            if (note.pinned) {
                setPinned([note, ...pinned]);
            } else {
                setOthers([note, ...others]);
            }
        }
        setNote({
            uuid: v4(),
            title: "",
            body: "",
            label: "",
            colour: "#fff",
            pinned: false,
        });
        setInpFlag(false);
    }

    return (
        <div className="note-taker">
            <div style={{ display: inpFlag ? "inline" : "none" }}>
                <input
                    style={{ display: "inline" }}
                    placeholder="Title"
                    className="note-taker-title"
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
                onClick={() => setInpFlag(true)}
                onChange={(e) => setNote({ ...note, body: e.target.value })}
                value={note.body}
            />

            <div
                style={{ display: inpFlag ? "inline" : "none" }}
                className="note-taker-footer"
            >
                <select
                    onChange={(e) =>
                        setNote({ ...note, label: e.target.value })
                    }
                >
                    {labels.map((label) => (
                        <option>{label}</option>
                    ))}
                </select>
                <select
                    onChange={(e) =>
                        setNote({ ...note, colour: e.target.value })
                    }
                >
                    {Object.keys(colours).map((colour) => (
                        <option>{colour}</option>
                    ))}
                </select>
                <button className="close" onClick={addNote}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default NoteTaker;
