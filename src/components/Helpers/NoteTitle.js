import React, { useRef, HTMLTextAreaElement, useEffect } from "react";
import { UnpinSvg, PinSvg } from "../Helpers/Svg";

function NoteTitle({ note, setNote }) {
    let multilineTextTitle = useRef < HTMLTextAreaElement > null;

    useEffect(() => {
        if (multilineTextTitle) {
            multilineTextTitle.style.height = "20px";
            multilineTextTitle.style.height =
                multilineTextTitle.scrollHeight + "px";
        }
    });

    return (
        <div className="note-taker-title">
            <textarea
                className="title-input"
                style={{ display: "inline" }}
                placeholder="Title"
                type="text"
                onChange={(e) => {
                    setNote({ ...note, title: e.target.value });
                }}
                ref={(ref) => (multilineTextTitle = ref)}
                value={note.title}
            />

            <button
                className="title-pin-button"
                style={{ display: "inline" }}
                onClick={() => setNote({ ...note, pinned: !note.pinned })}
            >
                {note.pinned ? <UnpinSvg /> : <PinSvg />}
            </button>
        </div>
    );
}

export default NoteTitle;
