import "./index.css";
import { NewNote } from "./components/NewNote/NewNote";
import { SidePannel } from "./components/SidePannel/SidePannel";
import { DisplayNotes } from "./components/DisplayNotes/DisplayNotes";
import { EditNote } from "./components/EditNote/EditNote";
import { useNotes } from "./ContextProviders/NotesContext";

export function App() {
    const { addNote, newNoteFlag } = useNotes();
    function saveOnOutOfFocus() {
        if (newNoteFlag) {
            addNote();
        }
    }

    return (
        <div className="App" onClick={saveOnOutOfFocus}>
            <SidePannel />
            <div className="main-container">
                <NewNote />
                <DisplayNotes />
                <EditNote />
            </div>
        </div>
    );
}
