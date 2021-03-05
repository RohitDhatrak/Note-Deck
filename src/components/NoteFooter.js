import React from "react";
import { v4 } from "uuid";
import ColourPicker from "./ColourPicker";
import LabelSelector from "./LabelSelector";

function NoteFooter({
    note,
    labels,
    colours,
    pinned,
    setPinned,
    others,
    setOthers,
    setModal,
    setInpFlag,
    setNote,
}) {
    function changeProperty(value, property) {
        if (setModal !== undefined) {
            setNote({ ...note, [property]: value });
        } else {
            note[property] = value;
            if (note.pinned) {
                setPinned([...pinned]);
            } else {
                setOthers([...others]);
            }
        }
    }

    function deleteNote(list) {
        const newList = [...list];
        const noteIdx = list.findIndex((key) => key.uuid === note.uuid);
        if (noteIdx === -1) {
            setInpFlag(false);
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
        if (setModal) setModal(false);
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className="note-taker-footer">
            <LabelSelector
                note={note}
                labels={labels}
                changeProperty={changeProperty}
            />
            <ColourPicker
                note={note}
                colours={colours}
                changeProperty={changeProperty}
            />
            <button
                onClick={() =>
                    note.pinned ? deleteNote(pinned) : deleteNote(others)
                }
            >
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    className="bin"
                >
                    <path
                        d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"
                        fill="rgb(204, 68, 68)"
                    ></path>
                </svg>
            </button>
        </div>
    );
}

export default NoteFooter;
