import React from "react";
import { NoteFooter } from "../Helpers/NoteFooter";
import { UnpinSvg, PinSvg } from "../Helpers/Svg";
import { useNotes } from "../../ContextProviders/NotesContext";

export function NoteCard({ noteId }) {
    const { notesList, setNotesList, setEditNote, setEditModal } = useNotes();
    const note = notesList[noteId];

    function displayEditModal() {
        setEditModal(true);
        setEditNote(note);
    }

    function togglePin() {
        function getNewList(currentNotesList) {
            const newNotesList = { ...currentNotesList };
            delete newNotesList[noteId];
            const newNote = { ...note };

            if (note.pinned) {
                newNote.pinned = false;
            } else {
                newNote.pinned = true;
            }

            return {
                [noteId]: { ...newNote, lastModified: Date.now() },
                ...newNotesList,
            };
        }

        setNotesList((currentNotesList) => getNewList(currentNotesList));
    }

    return (
        <div
            className="card"
            style={{
                backgroundColor: `${note.colour}`,
            }}
            onClick={displayEditModal}
            key={note.uuid}
        >
            <div className="card-title">{note.title}</div>

            <button
                className="card-pin-button"
                onClick={(e) => {
                    togglePin();
                    e.stopPropagation();
                }}
            >
                {note.pinned ? <UnpinSvg /> : <PinSvg />}
            </button>

            <p className="card-body">{note.body}</p>

            <div className="card-footer">
                <NoteFooter className="card-footer" note={note} />
            </div>
        </div>
    );
}
