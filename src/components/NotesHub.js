import React, { useState } from "react";
import EditComponent from "./EditComponent";
import NoteCard from "./NoteCard";

function NotesHub({
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

    console.log(editNote);

    function getFilteredList(arrList) {
        return arrList.filter((key) => key.label === filter);
    }

    function displayNotes(arrList) {
        return (
            <div>
                {arrList.map((note) => (
                    <NoteCard
                        note={note}
                        labels={labels}
                        colours={colours}
                        setModal={setModal}
                        setEditNote={setEditNote}
                        pinned={pinned}
                        setPinned={setPinned}
                        others={others}
                        setOthers={setOthers}
                    />
                ))}
            </div>
        );
    }

    function NotesCategories() {
        return (
            <div>
                {pinned.length ? <h1>Pinned</h1> : ""}
                {filter === ""
                    ? displayNotes(pinned)
                    : displayNotes(getFilteredList(pinned))}
                {others.length && pinned.length ? <h1>Others</h1> : ""}
                {filter === ""
                    ? displayNotes(others)
                    : displayNotes(getFilteredList(others))}
            </div>
        );
    }

    function addNote(note) {
        if (note.title !== "" || note.body !== "") {
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

    function closeModal(e) {
        if (e.target.localName === "div") {
            addNote(editNote);
            setModal(false);
        }
    }

    return (
        <div className="notes-container">
            {modal ? (
                <div className="edit-component-container" onClick={closeModal}>
                    <EditComponent
                        pinned={pinned}
                        setPinned={setPinned}
                        others={others}
                        setOthers={setOthers}
                        labels={labels}
                        colours={colours}
                        editNote={editNote}
                        setModal={setModal}
                        addNote={addNote}
                        setEditNote={setEditNote}
                    />
                </div>
            ) : (
                ""
            )}
            <NotesCategories />
        </div>
    );
}

export default NotesHub;
