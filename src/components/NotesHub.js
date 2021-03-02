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
                        togglePin={togglePin}
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

    function moveNote(source, target, note) {
        const noteIdx = source.findIndex((key) => key.uuid === note.uuid);
        source.splice(noteIdx, 1);
        if (note.pinned) {
            setPinned([note, ...target]);
            setOthers([...source]);
        } else {
            setOthers([note, ...target]);
            setPinned([...source]);
        }
    }

    function addNote(note) {
        if (note.title !== "" || note.body !== "") {
            if (note.pinned) {
                const noteIdx = pinned.findIndex(
                    (key) => key.uuid === note.uuid
                );
                if (noteIdx === -1) {
                    moveNote(others, pinned, note);
                } else {
                    pinned.splice(noteIdx, 1, note);
                    setPinned([...pinned]);
                }
            } else {
                const noteIdx = others.findIndex(
                    (key) => key.uuid === note.uuid
                );
                if (noteIdx === -1) {
                    moveNote(pinned, others, note);
                } else {
                    others.splice(noteIdx, 1, note);
                    setOthers([...others]);
                }
            }
        }
    }

    function closeModal(e) {
        addNote(editNote);
        setModal(false);
    }

    function togglePin(note, source, target) {
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
        // console.log(note);
        // const newList = [...source];
        // const noteIdx = newList.findIndex((key) => key.uuid === note.uuid);
        // // console.log(noteIdx);
        // const noteObj = { ...newList[noteIdx] };
        // noteObj.pinned = !note.pinned;
        // newList.splice(noteIdx, 1);
        // console.log(newList);
        // if (note.pinned) {
        //     setOthers([noteObj, ...target]);
        //     setPinned([...newList]);
        // } else {
        //     setPinned([noteObj, ...target]);
        //     setOthers([...newList]);
        // }
        // console.log(note);
        // console.log("pinned" + pinned.length);
        // console.log("others" + others.length);
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
                        togglePin={togglePin}
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
