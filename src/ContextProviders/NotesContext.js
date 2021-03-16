import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";
import colours from "../components/Helpers/Colours";
const NotesContext = createContext();

export function NotesProvider({ children }) {
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

    const [note, setNote] = useState({
        uuid: v4(),
        title: "",
        body: "",
        label: "",
        colour: colours.Colour,
        pinned: false,
    });
    const [editNote, setEditNote] = useState();

    const [newNoteFlag, setNewNoteFlag] = useState(false);
    const [editModal, setEditModal] = useState(false);

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
        <NotesContext.Provider
            value={{
                pinned,
                setPinned,
                others,
                setOthers,
                note,
                setNote,
                editNote,
                setEditNote,
                newNoteFlag,
                setNewNoteFlag,
                editModal,
                setEditModal,
                addNote,
            }}
        >
            {children}
        </NotesContext.Provider>
    );
}

export function useNotes() {
    return useContext(NotesContext);
}
