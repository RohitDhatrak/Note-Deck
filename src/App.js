import React, { useState } from "react";
import "./index.css";
import NewNote from "./components/NewNote/NewNote";
import SidePannel from "./components/SidePannel/SidePannel";
import DisplayNotes from "./components/DisplayNotes/DisplayNotes";
import EditNote from "./components/EditNote/EditNote";
import { useNotes } from "./ContextProviders/NotesContext";

function App() {
    const [labelList, setLabelList] = useState(["None", "Important", "Todo"]);
    const [filter, setFilter] = useState("");
    const { addNote } = useNotes();

    return (
        <div className="App" onClick={addNote}>
            <SidePannel
                labelList={labelList}
                filter={filter}
                setFilter={setFilter}
                setLabelList={setLabelList}
            />
            <div className="main-container">
                <NewNote labelList={labelList} />
                <DisplayNotes filter={filter} labelList={labelList} />
                <EditNote labelList={labelList} />
            </div>
        </div>
    );
}

export default App;
