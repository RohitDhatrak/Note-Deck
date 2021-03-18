import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { NotesProvider } from "./ContextProviders/NotesContext";
import { LabelProvider } from "./ContextProviders/LabelContext";

ReactDOM.render(
    <React.StrictMode>
        <NotesProvider>
            <LabelProvider>
                <App />
            </LabelProvider>
        </NotesProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
