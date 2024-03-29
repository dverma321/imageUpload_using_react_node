import { useState } from "react";
import noteContext from "./NoteContext";

const NoteState = (props) =>{

    const s1 = {
        "name":"Divyanshu Verma",
        "work":"SAP UI5/Fiori"
    }

    const [state, setState] = useState(s1);

    const update = () => {

        setTimeout(() => {

            setState({
                "name":"Himanshu verma",
                "work":"Reviewer"
            })
            
        }, 1000);

    }

    return     (
        <noteContext.Provider value={{state, update}}>

            {props.children}

        </noteContext.Provider>
        
    )
}

export default NoteState;



