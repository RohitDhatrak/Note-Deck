import { useContext, createContext, useState } from "react";
const LabelContext = createContext();

export function LabelProvider({ children }) {
    const [labelList, setLabelList] = useState(["None", "Important", "Todo"]);
    const [filter, setFilter] = useState("");
    return (
        <LabelContext.Provider
            value={{ labelList, setLabelList, filter, setFilter }}
        >
            {children}
        </LabelContext.Provider>
    );
}

export function useLabel() {
    return useContext(LabelContext);
}
