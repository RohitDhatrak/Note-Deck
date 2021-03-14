import React from "react";
import NoteTitle from "../Helpers/NoteTitle";
import NoteBody from "../Helpers/NoteBody";
import NoteFooter from "../Helpers/NoteFooter/NoteFooter";
import { useNotes } from "../../ContextProviders/NotesContext";

function EditNote({ labelList }) {
    const {
        pinned,
        setPinned,
        others,
        setOthers,
        editNote,
        setEditNote,
        editModal,
        setEditModal,
    } = useNotes();

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

    function saveNote(note) {
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

    function closeModal() {
        saveNote(editNote);
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
                            <NoteFooter
                                note={editNote}
                                setNote={setEditNote}
                                labelList={labelList}
                            />
                        </div>
                        <button
                            className="close"
                            onClick={() => {
                                saveNote(editNote);
                                setEditModal(false);
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default EditNote;
