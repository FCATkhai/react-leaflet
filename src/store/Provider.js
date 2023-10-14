import { useState, useEffect } from "react";
import Context from "./Context";

function Provider({ children }) {
    const [mapSelect, setMapSelect] = useState(
        () => {
            return JSON.parse(localStorage.getItem("mapSelect")) ||
            {
                0: false,
                1:false,
                2:false,
                3:false,
                4:false,
                5:false,
                6:false,
                7:false,
                8:false,
                9:false,
                10:false
            }
        }
        
    );
    
    const value = [mapSelect, setMapSelect];
    
    useEffect( () => {
        localStorage.setItem("mapSelect", JSON.stringify(mapSelect))
    }, [mapSelect])

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Provider