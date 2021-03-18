import React from "react";
import { NoteTitle } from "../Helpers/NoteTitle";
import { NoteBody } from "../Helpers/NoteBody";
import { NoteFooter } from "../Helpers/NoteFooter";
import { useNotes } from "../../ContextProviders/NotesContext";

export function EditNote() {
    const {
        setNotesList,
        editNote,
        setEditNote,
        editModal,
        setEditModal,
    } = useNotes();

    function saveNote() {
        function getNewList(currentNotesList) {
            const newNotesList = { ...currentNotesList };
            delete newNotesList[editNote.uuid];
            return { ...newNotesList, [editNote.uuid]: editNote };
        }
        setNotesList((currentNotesList) => getNewList(currentNotesList));
    }

    function closeModal() {
        saveNote();
        setEditModal(false);
    }

    return (
        <div>
            {editModal ? (
                <div className="edit-component-container" onClick={closeModal}>
                    <div
                        className="note-taker"
                        onClick={(e) => e.stopPropagation()}
                        style={{ backgroundColor: `${editNote.colour}` }}
                    >
                        <NoteTitle note={editNote} setNote={setEditNote} />
                        <NoteBody note={editNote} setNote={setEditNote} />
                        <div className="footer">
                            <NoteFooter note={editNote} setNote={setEditNote} />
                        </div>
                        <button className="close" onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
