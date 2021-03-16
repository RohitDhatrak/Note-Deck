import React from "react";
import { v4 } from "uuid";
import ColourPicker from "./ColourPicker";
import LabelSelector from "./LabelSelector";
import { DeleteSvg } from "../Svg";
import colours from "../Colours";
import { useNotes } from "../../../ContextProviders/NotesContext";

function NoteFooter({ note, setNote }) {
    const {
        pinned,
        setPinned,
        others,
        setOthers,
        setNewNoteFlag,
        setEditModal,
    } = useNotes();

    function changeProperty(value, property) {
        if (setNote === undefined) {
            // i.e component being used as Card Footer
            note[property] = value;
            if (note.pinned) {
                setPinned([...pinned]);
            } else {
                setOthers([...others]);
            }
        } else {
            setNote({ ...note, [property]: value });
        }
    }

    function deleteNote(list) {
        const newList = [...list];
        const noteIdx = list.findIndex((key) => key.uuid === note.uuid);
        if (noteIdx === -1) {
            setNewNoteFlag(false);
            setNote({
                uuid: v4(),
                title: "",
                body: "",
                label: "",
                colour: colours.Colour,
                pinned: false,
            });
            return;
        }
        newList.splice(noteIdx, 1);
        if (note.pinned) {
            setPinned(newList);
        } else {
            setOthers(newList);
        }
        if (setEditModal !== undefined) setEditModal(false);
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className="note-taker-footer">
            <LabelSelector
                note={note}
                changeProperty={changeProperty}
            />

            <ColourPicker changeProperty={changeProperty} />

            <button
                onClick={() =>
                    note.pinned ? deleteNote(pinned) : deleteNote(others)
                }
            >
                <DeleteSvg />
            </button>
        </div>
    );
}

export default NoteFooter;
