import { createContext, useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = (props) => {

    const [dark, setDark] = useState(true);


    return (
        <ModeContext.Provider value={{ dark, setDark }} >
            {props.children}
        </ModeContext.Provider>
    )
}

