import React from "react";
import NoteFooter from "../Helpers/NoteFooter/NoteFooter";
import { UnpinSvg, PinSvg } from "../Helpers/Svg";
import { useNotes } from "../../ContextProviders/NotesContext";

function NoteCard({ note }) {
    const {
        pinned,
        setPinned,
        others,
        setOthers,
        setEditNote,
        setEditModal,
    } = useNotes();

    function displayModal(e) {
        setEditModal(true);
        setEditNote(note);
    }

    function togglePin(source, target) {
        if (note.pinned) {
            const newPinned = [...pinned];
            const noteIdx = pinned.findIndex((key) => key.uuid === note.uuid);
            const noteObj = pinned[noteIdx];
            noteObj.pinned = !noteObj.pinned;
            newPinned.splice(noteIdx, 1);
            setOthers([noteObj, ...others]);
            setPinned(newPinned);
        } else {
            const newOthers = [...others];
            const noteIdx = others.findIndex((key) => key.uuid === note.uuid);
            const noteObj = others[noteIdx];
            noteObj.pinned = !noteObj.pinned;
            newOthers.splice(noteIdx, 1);
            setPinned([noteObj, ...pinned]);
            setOthers(newOthers);
        }

        // console.log(note);
        // const newList = [...source];
        // const noteIdx = newList.findIndex((key) => key.uuid === note.uuid);
        // console.log(noteIdx);
        // const noteObj = { ...newList[noteIdx] };
        // noteObj.pinned = !note.pinned;
        // newList.splice(noteIdx, 1);
        // console.log(newList);
        // if (note.pinned) {
        //     setOthers([noteObj, ...target]);
        //     setPinned([...newList]);
        // } else {
        //     setPinned([noteObj, ...target]);
        //     setOthers([...newList]);
        // }
        // console.log(note);
        // console.log("pinned" + pinned.length);
        // console.log("others" + others.length);
    }

    return (
        <div
            className="card"
            style={{
                backgroundColor: `${note.colour}`,
            }}
            onClick={displayModal}
        >
            <div className="card-title">{note.title}</div>

            <button
                className="card-pin-button"
                onClick={(e) => {
                    togglePin();
                    e.stopPropagation();
                    // note.pinned
                    //     ? togglePin([...pinned], [...others])
                    //     : togglePin([...others], [...pinned]);
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
