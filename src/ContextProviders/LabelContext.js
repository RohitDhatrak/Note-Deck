import { useContext, createContext, useState } from "react";
const LabelContext = createContext();

export function LabelProvider({ children }) {
    const [labelList, setLabelList] = useState(["None", "Important", "Todo"]);
    const [selectedLabel, setSelectedLabel] = useState("");
    return (
        <LabelContext.Provider
            value={{
                labelList,
                setLabelList,
                selectedLabel,
                setSelectedLabel,
            }}
        >
            {children}
        </LabelContext.Provider>
    );
}

export function useLabel() {
    return useContext(LabelContext);
}
