import React, { useState } from "react";
import "./index.css";
import NoteTaker from "./components/NoteTaker";
import Notes from "./components/Notes";

function App() {
    const [labels, setLabels] = useState(["All", "Important", "Todo"]);
    const [label, setLabel] = useState("All");
    const [notes, setNotes] = useState([
        {
            uuid: "7fb5f11e-b884-4854-a968-e7fd054c56e9",
            title: "Books on Finance",
            body:
                "Financial Affairs Of The Common Man: Master the Art of Personal Finance Management - Anil Lamba\n\nRomancing the Balance Sheet (2nd Edition) - Anil Lamba\n\nThe Two-Minute Revolution: The Art of Growing Business - Sangeeta Talwar\n\nLean Analytics: Use Data to Build a Better Startup Faster - Alistair Croll and Benjamin Yoskovitz\n\nTraction: Get A Grip On Your Business - Gino Wickman\n\nHow to Make Money in Stocks: A Winning System in Good Times Or Bad- William O'Neil",
            date:
                "Date Wed Feb 24 2021 13: 19: 49 GMT + 0530(India Standard Time)",
            label: "",
            colour: "rgb(251, 188, 4, 0.5)",
            pinned: false,
        },
        {
            uuid: "7fb5f11e-b884-4854-a968-e7fd054c56e9",
            title: "Books on Finance",
            body:
                "Financial Affairs Of The Common Man: Master the Art of Personal Finance Management - Anil Lamba\n\nRomancing the Balance Sheet (2nd Edition) - Anil Lamba\n\nThe Two-Minute Revolution: The Art of Growing Business - Sangeeta Talwar\n\nLean Analytics: Use Data to Build a Better Startup Faster - Alistair Croll and Benjamin Yoskovitz\n\nTraction: Get A Grip On Your Business - Gino Wickman\n\nHow to Make Money in Stocks: A Winning System in Good Times Or Bad- William O'Neil",
            date:
                "Date Wed Feb 24 2021 13: 19: 49 GMT + 0530(India Standard Time)",
            label: "",
            colour: "rgb(251, 188, 4, 0.5)",
            pinned: true,
        },
    ]);

    const colours = {
        Colour: "rgb(255, 255, 255)",
        Red: "rgb(242, 139, 130, 0.9)",
        Orange: "rgb(251, 188, 4, 0.5)",
        Yellow: "rgb(255, 244, 117, 0.9)",
        Green: "rgb(204, 255, 144, 0.9)",
        Teal: "rgb(167, 255, 235, 0.9)",
        Blue: "rgb(203, 240, 248, 0.9)",
        Purple: "rgb(215, 174, 251, 0.9)",
        Pink: "rgb(253, 207, 232, 0.9)",
        Brown: "rgb(230, 201, 168, 0.9)",
        Grey: "rgb(232, 234, 237, 0.9)",
    };

    return (
        <div className="App">
            <div className="side-bar">
                {labels.map((label) => (
                    <div className="label">{label}</div>
                ))}
            </div>
            <NoteTaker
                colours={colours}
                labels={labels}
                notes={notes}
                setNotes={setNotes}
            />
            <Notes notes={notes} />
        </div>
    );
}

export default App;
