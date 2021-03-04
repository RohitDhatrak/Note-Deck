import React, { useRef } from "react";

function NoteBody({ note, setNote, setInpFlag, modal }) {
    let multilineTextBody = useRef < HTMLTextAreaElement > null;

    function changeTextArea() {
        console.log(multilineTextBody);
        if (multilineTextBody) {
            multilineTextBody.style.height = "43.2px";
            multilineTextBody.style.height =
                multilineTextBody.scrollHeight + "px";
        }
    }

    return (
        <textarea
            className="note-taker-body"
            placeholder="Take a note..."
            type="text"
            onClick={() => (setInpFlag ? setInpFlag(true) : "")}
            onChange={(e) => {
                changeTextArea();
                setNote({ ...note, body: e.target.value });
            }}
            ref={(ref) => (multilineTextBody = ref)}
            value={note.body}
        />
    );
}

export default NoteBody;
