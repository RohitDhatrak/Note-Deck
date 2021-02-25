import React, { useState } from "react";
import EditComponent from "./EditComponent";

function Notes({
    pinned,
    setPinned,
    others,
    setOthers,
    filter,
    labels,
    colours,
}) {
    const [modal, setModal] = useState(false);
    const [editNote, setEditNote] = useState();

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

    function getFilteredList(arrList) {
        return arrList.filter((key) => key.label === filter);
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
                        onClick={(e) => {
                            if (
                                e.target.localName !== "button" &&
                                e.target.localName !== "option"
                            ) {
                                setModal(true);
                                setEditNote(note);
                            }
                        }}
                    >
                        <div>{note.title}</div>
                        <button
                            onClick={() => {
                                togglePin(note);
                                setModal(false);
                            }}
                        >
                            {note.pinned ? "Unpin" : "Pin"}
                        </button>
                        <p>{note.body}</p>
                        <div>
                            <select
                                onChange={(e) => changeLabel(e, note)}
                                value={note.label}
                            >
                                {labels.map((label) => (
                                    <option>{label}</option>
                                ))}
                            </select>
                            <select
                                onChange={(e) => changeColour(e, note)}
                                value={note.colour}
                            >
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
            {modal ? (
                <div className="edit-component-container">
                    <EditComponent
                        pinned={pinned}
                        setPinned={setPinned}
                        others={others}
                        setOthers={setOthers}
                        labels={labels}
                        colours={colours}
                        editNote={editNote}
                        setModal={setModal}
                    />
                </div>
            ) : (
                ""
            )}
            <h1>Pinned</h1>
            {filter === ""
                ? displayNotes(pinned)
                : displayNotes(getFilteredList(pinned))}
            <h1>Others</h1>
            {filter === ""
                ? displayNotes(others)
                : displayNotes(getFilteredList(others))}
        </div>
    );
}

export default Notes;
