import React, { useRef, useEffect } from "react";
import { UnpinSvg, PinSvg } from "../Helpers/Svg";

export function NoteTitle({ note, setNote }) {
    let textAreaRef = useRef(null);

    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.minHeight = "16px";
            textAreaRef.style.height = textAreaRef.scrollHeight + "px";
        }
    }, [note]);

    function saveNoteTitle(e) {
        setNote((currentNote) => ({
            ...currentNote,
            title: e.target.value,
            lastEdited: Date.now(),
        }));
    }

    function togglePin() {
        setNote((currentNote) => ({
            ...currentNote,
            pinned: !note.pinned,
            lastModified: Date.now(),
        }));
    }

    return (
        <div className="note-taker-title">
            <textarea
                className="title-input"
                style={{ display: "inline" }}
                placeholder="Title"
                type="text"
                onChange={saveNoteTitle}
                ref={(ref) => (textAreaRef = ref)}
                value={note.title}
            />

            <button
                className="title-pin-button"
                style={{ display: "inline" }}
                onClick={togglePin}
            >
                {note.pinned ? <UnpinSvg /> : <PinSvg />}
            </button>
        </div>
    );
}
