import React from "react";
import NoteFooter from "./NoteFooter";

function NoteCard({
    labels,
    colours,
    setModal,
    setEditNote,
    others,
    setOthers,
    pinned,
    setPinned,
    note,
}) {
    function displayModal(e) {
        if (e.target.localName === "div" || e.target.localName === "p") {
            setModal(true);
            setEditNote(note);
        }
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
        // // console.log(noteIdx);
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
            style={{
                backgroundColor: `${note.colour}`,
            }}
            className="note"
            onClick={displayModal}
        >
            <div>{note.title}</div>
            <button
                onClick={() => {
                    togglePin();
                    // note.pinned
                    //     ? togglePin([...pinned], [...others])
                    //     : togglePin([...others], [...pinned]);
                }}
            >
                {note.pinned ? "Unpin" : "Pin"}
            </button>
            <p>{note.body}</p>
            <NoteFooter
                note={note}
                labels={labels}
                colours={colours}
                pinned={pinned}
                setPinned={setPinned}
                others={others}
                setOthers={setOthers}
            />
        </div>
    );
}

export default NoteCard;
