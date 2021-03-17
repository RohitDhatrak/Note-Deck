import React from "react";
import NoteCard from "./NoteCard";
import { useNotes } from "../../ContextProviders/NotesContext";
import { useLabel } from "../../ContextProviders/LabelContext";

function DisplayNotes() {
    const { filter } = useLabel();
    const { notesList } = useNotes();

    function sortByTime(obj) {
        const listOfKeys = Object.keys(obj);
        listOfKeys.sort(
            (a, b) => notesList[b].lastModified - notesList[a].lastModified
        );
        return listOfKeys;
    }

    function sortByLabel(list) {
        return list.filter((key) => notesList[key].label === filter);
    }

    function filterPinned(list) {
        return list.filter((key) => notesList[key].pinned);
    }

    function filterUnpinned(list) {
        return list.filter((key) => !notesList[key].pinned);
    }

    function displayNotes(list) {
        return (
            <div className="notes-flex-container">
                {list.map((noteKey) => (
                    <NoteCard noteKey={noteKey} />
                ))}
            </div>
        );
    }

    function NotesCategories() {
        const sortedByTime = sortByTime(notesList);
        const filteredByLabel =
            filter === "" ? sortedByTime : sortByLabel(sortedByTime);
        const pinnedList = filterPinned(filteredByLabel);
        const othersList = filterUnpinned(filteredByLabel);

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
