import React from "react";

function Notes({
    pinned,
    setPinned,
    others,
    setOthers,
    filter,
    labels,
    colours,
}) {
    if (filter !== "All") {
        others = others.filter((key) => key.label === filter);
        pinned = pinned.filter((key) => key.label === filter);
    }

    function togglePin(note) {
        if (note.pinned) {
            const newPinned = [...pinned];
            const noteIdx = pinned.findIndex((key) => key.uuid === note.uuid);
            const noteObj = pinned[noteIdx];
            noteObj.pinned = !noteObj.pinned;
            newPinned.splice(noteIdx, 1);
            setOthers([noteObj, ...others]);
            setPinned(newPinned);
        } else {
            const newOthers = [...others];
            const noteIdx = others.findIndex((key) => key.uuid === note.uuid);
            const noteObj = others[noteIdx];
            noteObj.pinned = !noteObj.pinned;
            newOthers.splice(noteIdx, 1);
            setPinned([noteObj, ...pinned]);
            setOthers(newOthers);
        }
    }

    function changeColour(e, note) {
        note.colour = e.target.value;
        if (note.pinned) {
            setPinned([...pinned]);
        } else {
            setOthers([...others]);
        }
    }

    function changeLabel(e, note) {
        note.label = e.target.value;
        if (note.pinned) {
            setPinned([...pinned]);
        } else {
            setOthers([...others]);
        }
    }

    function deleteNote(note) {
        if (note.pinned) {
            const newPinned = [...pinned];
            const noteIdx = pinned.findIndex((key) => key.uuid === note.uuid);
            newPinned.splice(noteIdx, 1);
            setPinned(newPinned);
        } else {
            const newOthers = [...others];
            const noteIdx = others.findIndex((key) => key.uuid === note.uuid);
            newOthers.splice(noteIdx, 1);
            setOthers(newOthers);
        }
    }

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
                        <div>
                            <select onChange={(e) => changeLabel(e, note)}>
                                {labels.map((label) => (
                                    <option>{label}</option>
                                ))}
                            </select>
                            <select onChange={(e) => changeColour(e, note)}>
                                {Object.keys(colours).map((colour) => (
                                    <option>{colour}</option>
                                ))}
                            </select>
                            <button onClick={() => deleteNote(note)}>
                                Delete
                            </button>
                        </div>
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
