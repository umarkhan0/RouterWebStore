import { useState } from "react";
import userContext from "./userCotext";
const UserContextProvider = ({children}) => {
    let [name , setName] = useState("umar")
return(
    <>
    <userContext.Provider value={{name , setName}}>

        {children}
    </userContext.Provider>
    </>
)
};
export default UserContextProvider;