import React, { useState } from "react";
import { v4 } from "uuid";

function NoteTaker({ colours, labels, notes, setNotes }) {
    const [inpFlag, setInpFlag] = useState(false);
    const [note, setNote] = useState({
        uuid: v4(),
        title: "",
        body: "",
        date: new Date(),
        label: "",
        colour: "#fff",
        pinned: false,
    });

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
                    pin
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
                <button
                    className="close"
                    onClick={() => {
                        setNotes([...notes, note]);
                        setNote({
                            uuid: v4(),
                            title: "",
                            body: "",
                            date: new Date(),
                            label: "",
                            colour: "#fff",
                            pin: false,
                        });
                        setInpFlag(false);
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default NoteTaker;
