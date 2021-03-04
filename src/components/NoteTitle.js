import React from "react";

function NoteTitle({ note, setNote }) {
    let multilineTextTitle;
    function changeInputSize() {
        if (multilineTextTitle) {
            multilineTextTitle.style.height = "20.2px";
            multilineTextTitle.style.height =
                multilineTextTitle.scrollHeight + "px";
        }
    }
    return (
        <div className="note-taker-title">
            <textarea
                className="title-input"
                style={{ display: "inline" }}
                placeholder="Title"
                type="text"
                onChange={(e) => {
                    changeInputSize();
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
                {note.pinned ? (
                    <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        style={{ transform: "scale(1.5)" }}
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
                        style={{ transform: "scale(1.5)" }}
                    >
                        <path
                            d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2m-7.2 2l1.2-1.2V4h4v8.8l1.2 1.2H8.8z"
                            fill="currentColor"
                        ></path>
                    </svg>
                )}
            </button>
        </div>
    );
}

export default NoteTitle;
