import React, { useState } from "react";
import { v4 } from "uuid";
import "./index.css";
import AddNote from "./components/AddNote";
import SidePannel from "./components/SidePannel";
import NotesHub from "./components/NotesHub";

function App() {
    const [labels, setLabels] = useState(["All", "Important", "Todo"]);
    const [label, setLabel] = useState("");
    const [filter, setFilter] = useState("");
    const [pinned, setPinned] = useState([
        {
            uuid: "7fb5f11e-b884-4854-a968-e7fd054c56e9",
            title: "Books on Finance",
            body:
                "Financial Affairs Of The Common Man: Master the Art of Personal Finance Management - Anil Lamba\n\nRomancing the Balance Sheet (2nd Edition) - Anil Lamba\n\nThe Two-Minute Revolution: The Art of Growing Business - Sangeeta Talwar\n\nLean Analytics: Use Data to Build a Better Startup Faster - Alistair Croll and Benjamin Yoskovitz\n\nTraction: Get A Grip On Your Business - Gino Wickman\n\nHow to Make Money in Stocks: A Winning System in Good Times Or Bad- William O'Neil",
            label: "",
            colour: "rgb(172, 120, 25, 0.5)",
            pinned: true,
        },
    ]);
    const [others, setOthers] = useState([
        {
            uuid: "7fb5f11e-b884-4854-a968-e88d054c56e9",
            title: "Books on Finance",
            body:
                "Financial Affairs Of The Common Man: Master the Art of Personal Finance Management - Anil Lamba\n\nRomancing the Balance Sheet (2nd Edition) - Anil Lamba\n\nThe Two-Minute Revolution: The Art of Growing Business - Sangeeta Talwar\n\nLean Analytics: Use Data to Build a Better Startup Faster - Alistair Croll and Benjamin Yoskovitz\n\nTraction: Get A Grip On Your Business - Gino Wickman\n\nHow to Make Money in Stocks: A Winning System in Good Times Or Bad- William O'Neil",
            label: "",
            colour: "rgb(88, 141, 28, 0.5)",
            pinned: false,
        },
    ]);
    const [inpFlag, setInpFlag] = useState(false);

    const colours = {
        Colour: "rgb(32, 33, 36)",
        Red: "rgb(134, 47, 39, 0.5)",
        Orange: "rgb(172, 120, 25, 0.5)",
        Yellow: "rgb(190, 177, 29, 0.5)",
        Green: "rgb(88, 141, 28, 0.5)",
        Teal: "rgb(25, 117, 96, 0.5)",
        Blue: "rgb(32, 127, 148, 0.5)",
        Purple: "rgb(97, 33, 150, 0.5)",
        Pink: "rgb(141, 39, 95, 0.5)",
        Brown: "rgb(110, 55, 17, 0.5)",
        Grey: "rgb(98, 99, 99, 0.5)",
    };
    const [note, setNote] = useState({
        uuid: v4(),
        title: "",
        body: "",
        label: "",
        colour: colours.Colour,
        pinned: false,
    });

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
        setInpFlag(false);
    }

    return (
        <div className="App" onClick={addNote}>
            <SidePannel
                labels={labels}
                setLabels={setLabels}
                label={label}
                setLabel={setLabel}
                setFilter={setFilter}
            />
            <div className="main-container">
                <AddNote
                    colours={colours}
                    labels={labels}
                    others={others}
                    setOthers={setOthers}
                    pinned={pinned}
                    setPinned={setPinned}
                    note={note}
                    setNote={setNote}
                    inpFlag={inpFlag}
                    setInpFlag={setInpFlag}
                    addNote={addNote}
                />
                <NotesHub
                    others={others}
                    setOthers={setOthers}
                    pinned={pinned}
                    setPinned={setPinned}
                    filter={filter}
                    labels={labels}
                    colours={colours}
                />
            </div>
        </div>
    );
}

export default App;
