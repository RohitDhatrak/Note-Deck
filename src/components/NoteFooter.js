import React from "react";
import { v4 } from "uuid";

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
    function changeProperty(e, property) {
        note[property] = e.target.value;
        if (note.pinned) {
            setPinned([...pinned]);
        } else {
            setOthers([...others]);
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
                colour: "#fff",
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
        <div>
            <select
                onChange={(e) => changeProperty(e, "label")}
                value={note.label}
            >
                {labels.map((label) => (
                    <option>{label}</option>
                ))}
            </select>
            <select
                onChange={(e) => changeProperty(e, "colour")}
                value={note.colour}
            >
                {Object.keys(colours).map((colour) => (
                    <option value={colours[colour]}>{colour}</option>
                ))}
            </select>
            <button
                onClick={() =>
                    note.pinned ? deleteNote(pinned) : deleteNote(others)
                }
            >
                Delete
            </button>
        </div>
    );
}

export default NoteFooter;
