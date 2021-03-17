import React from "react";
import { v4 } from "uuid";
import ColourPicker from "./ColourPicker";
import LabelSelector from "./LabelSelector";
import { DeleteSvg } from "../Svg";
import colours from "../Colours";
import { useNotes } from "../../../ContextProviders/NotesContext";

function NoteFooter({ note, setNote }) {
    const {
        notesList,
        setNotesList,
        setNewNoteFlag,
        setEditModal,
    } = useNotes();

    function changeProperty({ value, property }) {
        if (setNote === undefined) {
            // i.e component being used as Card Footer
            function getNewList(currentNotes) {
                const newList = { ...currentNotes };
                delete newList[note.uuid];
                note[property] = value;
                return { ...newList, [note.uuid]: note };
            }
            setNotesList((currentNotes) => getNewList(currentNotes));
        } else {
            setNote((currNote) => ({ ...currNote, [property]: value }));
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

        function getNewList(currentNotes) {
            const newList = { ...currentNotes };
            delete newList[note.uuid];
            return { ...newList };
        }
        setNotesList((currentNotes) => getNewList(currentNotes));

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

export default NoteFooter;
