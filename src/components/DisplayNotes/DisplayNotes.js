import React from "react";
import { NoteCard } from "./NoteCard";
import { useNotes } from "../../ContextProviders/NotesContext";
import { useLabel } from "../../ContextProviders/LabelContext";

export function DisplayNotes() {
    const { selectedLabel } = useLabel();
    const { notesList } = useNotes();

    function sortByTime(notesObject) {
        const listOfIds = Object.keys(notesObject);
        listOfIds.sort(
            (a, b) => notesList[b].lastModified - notesList[a].lastModified
        );
        return listOfIds;
    }

    function sortByLabel(listOfIds) {
        return listOfIds.filter((id) => notesList[id].label === selectedLabel);
    }

    function filterPinned(listOfIds) {
        return listOfIds.filter((id) => notesList[id].pinned);
    }

    function filterUnpinned(listOfIds) {
        return listOfIds.filter((id) => !notesList[id].pinned);
    }

    function displayNotes(listOfIds) {
        return (
            <div className="notes-flex-container">
                {listOfIds.map((noteId) => (
                    <NoteCard noteId={noteId} />
                ))}
            </div>
        );
    }

    function NotesCategories() {
        const sortedByTime = sortByTime(notesList);
        const filteredByLabel =
            selectedLabel === "" ? sortedByTime : sortByLabel(sortedByTime);
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
