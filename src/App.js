import "./index.css";
import { NewNote } from "./components/NewNote/NewNote";
import { SidePannel } from "./components/SidePannel/SidePannel";
import { DisplayNotes } from "./components/DisplayNotes/DisplayNotes";
import { EditNote } from "./components/EditNote/EditNote";
import { useNotes } from "./ContextProviders/NotesContext";

function App() {
    const { addNote } = useNotes();

    return (
        <div className="App" onClick={addNote}>
            <SidePannel />
            <div className="main-container">
                <NewNote />
                <DisplayNotes />
                <EditNote />
            </div>
        </div>
    );
}

export default App;
