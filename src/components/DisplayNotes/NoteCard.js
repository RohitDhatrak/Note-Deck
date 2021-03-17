import React from "react";
import NoteFooter from "../Helpers/NoteFooter/NoteFooter";
import { UnpinSvg, PinSvg } from "../Helpers/Svg";
import { useNotes } from "../../ContextProviders/NotesContext";

function NoteCard({ noteKey }) {
    const { notesList, setNotesList, setEditNote, setEditModal } = useNotes();
    const note = notesList[noteKey];

    function displayModal() {
        setEditModal(true);
        setEditNote(note);
    }

    function togglePin() {
        function getNewNotes(currentNotes) {
            const newList = { ...currentNotes };
            delete newList[noteKey];
            const newNote = { ...note };

            if (note.pinned) {
                newNote.pinned = false;
            } else {
                newNote.pinned = true;
            }

            return {
                [noteKey]: { ...newNote, lastModified: Date.now() },
                ...newList,
            };
        }

        setNotesList((currentNotes) => getNewNotes(currentNotes));
    }

    return (
        <div
            className="card"
            style={{
                backgroundColor: `${note.colour}`,
            }}
            onClick={displayModal}
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

export default NoteCard;
