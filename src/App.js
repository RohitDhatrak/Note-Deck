import React, { useState } from "react";
import { v4 } from "uuid";
import "./index.css";
import NewNote from "./components/NewNote/NewNote";
import SidePannel from "./components/SidePannel/SidePannel";
import DisplayNotes from "./components/DisplayNotes/DisplayNotes";
import EditNote from "./components/EditNote/EditNote";
import colours from "./components/Helpers/Colours";

function App() {
    const [labelList, setLabelList] = useState(["None", "Important", "Todo"]);
    const [filter, setFilter] = useState("");

    const [pinned, setPinned] = useState([
        {
            uuid: "7fb5f11e-b884-4854-a968-e7fd054c56e9",
            title: "Books on Finance",
            body:
                "Financial Affairs Of The Common Man: Master the Art of Personal Finance Management - Anil Lamba\n\nRomancing the Balance Sheet (2nd Edition) - Anil Lamba\n\nThe Two-Minute Revolution: The Art of Growing Business - Sangeeta Talwar\n\nLean Analytics: Use Data to Build a Better Startup Faster - Alistair Croll and Benjamin Yoskovitz\n\nTraction: Get A Grip On Your Business - Gino Wickman\n\nHow to Make Money in Stocks: A Winning System in Good Times Or Bad- William O'Neil",
            label: "Todo",
            colour: "rgb(172, 120, 25, 0.5)",
            pinned: true,
        },
    ]);
    const [others, setOthers] = useState([
        {
            uuid: "e88d054c56e9-7fb5f11e-b884-4854-a968-",
            title: "Books on Finance",
            body:
                "Financial Affairs Of The Common Man: Master the Art of Personal Finance Management - Anil Lamba\n\nRomancing the Balance Sheet (2nd Edition) - Anil Lamba\n\nThe Two-Minute Revolution: The Art of Growing Business - Sangeeta Talwar\n\nLean Analytics: Use Data to Build a Better Startup Faster - Alistair Croll and Benjamin Yoskovitz\n\nTraction: Get A Grip On Your Business - Gino Wickman\n\nHow to Make Money in Stocks: A Winning System in Good Times Or Bad- William O'Neil",
            label: "Important",
            colour: "rgb(88, 141, 28, 0.5)",
            pinned: false,
        },
    ]);

    const [newNoteFlag, setNewNoteFlag] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [note, setNote] = useState({
        uuid: v4(),
        title: "",
        body: "",
        label: "",
        colour: colours.Colour,
        pinned: false,
    });
    const [editNote, setEditNote] = useState();

    function addNote() {
        let title = note.title.trim();
        let body = note.body.trim();
        if (title.length || body.length) {
            if (note.pinned) {
                setPinned([note, ...pinned]);
            } else {
                setOthers([note, ...others]);
            }
        }
        setNote({
            uuid: v4(),
            title: "",
            body: "",
            label: "",
            colour: colours.Colour,
            pinned: false,
        });
        setNewNoteFlag(false);
    }

    return (
        <div className="App" onClick={addNote}>
            <SidePannel
                labelList={labelList}
                filter={filter}
                setFilter={setFilter}
                setLabelList={setLabelList}
            />
            <div className="main-container">
                <NewNote
                    labelList={labelList}
                    others={others}
                    setOthers={setOthers}
                    pinned={pinned}
                    setPinned={setPinned}
                    note={note}
                    setNote={setNote}
                    newNoteFlag={newNoteFlag}
                    setNewNoteFlag={setNewNoteFlag}
                    addNote={addNote}
                />
                <DisplayNotes
                    others={others}
                    setOthers={setOthers}
                    pinned={pinned}
                    setPinned={setPinned}
                    filter={filter}
                    labelList={labelList}
                    setEditModal={setEditModal}
                    setEditNote={setEditNote}
                />
                <EditNote
                    pinned={pinned}
                    setPinned={setPinned}
                    others={others}
                    setOthers={setOthers}
                    labelList={labelList}
                    editNote={editNote}
                    setEditNote={setEditNote}
                    setEditModal={setEditModal}
                    editModal={editModal}
                />
            </div>
        </div>
    );
}

export default App;
