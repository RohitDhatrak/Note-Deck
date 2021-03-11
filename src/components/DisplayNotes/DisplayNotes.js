import React from "react";
import NoteCard from "./NoteCard";

function DisplayNotes({
    pinned,
    setPinned,
    others,
    setOthers,
    filter,
    labelList,
    colours,
    setEditModal,
    setEditNote,
}) {
    function getFilteredList(arrList) {
        return arrList.filter((key) => key.label === filter);
    }

    function displayNotes(arrList) {
        return (
            <div className="notes-flex-container">
                {arrList.map((note) => (
                    <NoteCard
                        note={note}
                        labelList={labelList}
                        colours={colours}
                        setEditModal={setEditModal}
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
        const pinnedList = filter === "" ? pinned : getFilteredList(pinned);
        const othersList = filter === "" ? others : getFilteredList(others);
        return (
            <div>
                {pinnedList.length ? (
                    <h1 className="notes-pinned">Pinned</h1>
                ) : null}
                {displayNotes(pinnedList)}
                {othersList.length && pinnedList.length ? (
                    <h1 className="notes-others">Others</h1>
                ) : null}
                {displayNotes(othersList)}
            </div>
        );
    }

    return (
        <div>
            <NotesCategories />
        </div>
    );
}

export default DisplayNotes;
