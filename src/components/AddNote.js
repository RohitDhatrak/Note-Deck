import React, { useState } from "react";
import { v4 } from "uuid";
import NoteTitle from "./NoteTitle";
import NoteBody from "./NoteBody";
import NoteFooter from "./NoteFooter";

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
        let title = note.title.trim();
        let body = note.body.trim();
        if (title.length || body.length) {
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
                <NoteTitle
                    className="note-taker-title"
                    note={note}
                    setNote={setNote}
                />
            </div>

            <NoteBody note={note} setNote={setNote} setInpFlag={setInpFlag} />

            <div
                style={{ display: inpFlag ? "inline" : "none" }}
                className="note-taker-footer"
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

export default NoteTaker;
