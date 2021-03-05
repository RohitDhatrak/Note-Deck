import React, { useState } from "react";
import EditComponent from "./EditComponent";
import NoteCard from "./NoteCard";
import EditLabel from "./EditLabel";

function NotesDisplay({
    pinned,
    setPinned,
    others,
    setOthers,
    filter,
    labels,
    setLabels,
    label,
    setLabel,
    colours,
    editLabel,
    setEditLabel,
}) {
    const [modal, setModal] = useState(false);
    const [editNote, setEditNote] = useState();

    function getFilteredList(arrList) {
        return arrList.filter((key) => key.label === filter);
    }

    function displayNotes(arrList) {
        return (
            <div className="notes-flex-container">
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
        const pinnedList = filter === "" ? pinned : getFilteredList(pinned);
        const othersList = filter === "" ? others : getFilteredList(others);
        return (
            <div>
                {pinnedList.length ? (
                    <h1 className="notes-pinned">Pinned</h1>
                ) : (
                    ""
                )}
                {displayNotes(pinnedList)}
                {othersList.length && pinnedList.length ? (
                    <h1 className="notes-others">Others</h1>
                ) : (
                    ""
                )}
                {displayNotes(othersList)}
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

        // TODO Refactoring left >> used in NoteCard.js line no 33
        // console.log(note);
        // const newList = [...source];
        // const noteIdx = newList.findIndex((key) => key.uuid === note.uuid);
        // console.log(noteIdx);
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

    function addNewLabel() {
        if (label !== "") {
            setLabels([...labels, label]);
            setLabel("");
        }
        setEditLabel(false);
    }

    return (
        <div>
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
                        modal={modal}
                        setModal={setModal}
                        addNote={addNote}
                        setEditNote={setEditNote}
                    />
                </div>
            ) : (
                ""
            )}
            {editLabel ? (
                <div
                    className="edit-label-component-container"
                    onClick={addNewLabel}
                >
                    <EditLabel
                        label={label}
                        setLabel={setLabel}
                        addNewLabel={addNewLabel}
                    />
                </div>
            ) : (
                ""
            )}
            <NotesCategories />
        </div>
    );
}

export default NotesDisplay;
