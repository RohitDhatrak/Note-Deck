import React from "react";
import { v4 } from "uuid";
import { ColourPicker } from "./NoteFooterHelpers/ColourPicker";
import { LabelSelector } from "./NoteFooterHelpers/LabelSelector";
import { DeleteSvg } from "./Svg";
import { colours } from "./Colours";
import { useNotes } from "../../ContextProviders/NotesContext";

export function NoteFooter({ note, setNote }) {
    const {
        notesList,
        setNotesList,
        setNewNoteFlag,
        setEditModal,
    } = useNotes();

    function changeProperty({ value, property }) {
        if (setNote === undefined) {
            // i.e component being used as Card Footer
            function getNewList(currentNotesList) {
                const newNotesList = { ...currentNotesList };
                delete newNotesList[note.uuid];
                note[property] = value;
                return { ...newNotesList, [note.uuid]: note };
            }
            setNotesList((currentNotesList) => getNewList(currentNotesList));
        } else {
            setNote((currentNote) => ({ ...currentNote, [property]: value }));
        }
    }

    function deleteNote() {
        if (!(note.uuid in notesList)) {
            setNewNoteFlag(false);
            setNote({
                uuid: v4(),
                title: "",
                body: "",
                label: "",
                colour: colours.Default,
                pinned: false,
            });
            return;
        }

        function getNewList(currentNotesList) {
            const newNotesList = { ...currentNotesList };
            delete newNotesList[note.uuid];
            return { ...newNotesList };
        }
        setNotesList((currentNotesList) => getNewList(currentNotesList));

        if (setEditModal !== undefined) setEditModal(false);
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className="note-taker-footer">
            <LabelSelector note={note} changeProperty={changeProperty} />

            <ColourPicker changeProperty={changeProperty} />

            <button onClick={deleteNote}>
                <DeleteSvg />
            </button>
        </div>
    );
}
