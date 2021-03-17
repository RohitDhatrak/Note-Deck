import { createContext, useContext, useState } from "react";
import { v4 } from "uuid";
import colours from "../components/Helpers/Colours";
const NotesContext = createContext();

export function NotesProvider({ children }) {
    const [notesList, setNotesList] = useState({
        "7fb5f11e-b884-4854-a968-e7fd054c56e9": {
            uuid: "7fb5f11e-b884-4854-a968-e7fd054c56e9",
            title: "Books on Finance",
            body:
                "Financial Affairs Of The Common Man: Master the Art of Personal Finance Management - Anil Lamba\n\nRomancing the Balance Sheet (2nd Edition) - Anil Lamba\n\nThe Two-Minute Revolution: The Art of Growing Business - Sangeeta Talwar\n\nLean Analytics: Use Data to Build a Better Startup Faster - Alistair Croll and Benjamin Yoskovitz\n\nTraction: Get A Grip On Your Business - Gino Wickman\n\nHow to Make Money in Stocks: A Winning System in Good Times Or Bad- William O'Neil",
            label: "Todo",
            colour: "rgb(172, 120, 25, 0.5)",
            pinned: true,
            lastModified: Date.now(),
            lastEdited: Date.now(),
        },
        "e88d054c56e9-7fb5f11e-b884-4854-a968": {
            uuid: "e88d054c56e9-7fb5f11e-b884-4854-a968",
            title: "Books on Finance",
            body:
                "Financial Affairs Of The Common Man: Master the Art of Personal Finance Management - Anil Lamba\n\nRomancing the Balance Sheet (2nd Edition) - Anil Lamba\n\nThe Two-Minute Revolution: The Art of Growing Business - Sangeeta Talwar\n\nLean Analytics: Use Data to Build a Better Startup Faster - Alistair Croll and Benjamin Yoskovitz\n\nTraction: Get A Grip On Your Business - Gino Wickman\n\nHow to Make Money in Stocks: A Winning System in Good Times Or Bad- William O'Neil",
            label: "Important",
            colour: "rgb(88, 141, 28, 0.5)",
            pinned: false,
            lastModified: Date.now(),
            lastEdited: Date.now(),
        },
    });

    const [note, setNote] = useState({
        uuid: v4(),
        title: "",
        body: "",
        label: "",
        colour: colours.Default,
        pinned: false,
        lastModified: Date.now(),
        lastEdited: Date.now(),
    });
    const [editNote, setEditNote] = useState({});

    const [newNoteFlag, setNewNoteFlag] = useState(false);
    const [editModal, setEditModal] = useState(false);

    function addNote() {
        const title = note.title.trim();
        const body = note.body.trim();
        if (title.length || body.length) {
            setNotesList((currentNotes) => ({
                [note.uuid]: note,
                ...currentNotes,
            }));
        }
        setNote({
            uuid: v4(),
            title: "",
            body: "",
            label: "",
            colour: colours.Default,
            pinned: false,
            lastModified: Date.now(),
            lastEdited: Date.now(),
        });
        setNewNoteFlag(false);
    }

    return (
        <NotesContext.Provider
            value={{
                notesList,
                setNotesList,
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
