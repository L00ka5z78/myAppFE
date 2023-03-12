import {useState, createContext} from 'react';
import * as React from "react";

export const UserContext = createContext({
    user: {}, setUser: () => {
    }
});

export const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    return (
        /**  type '{ task: {}; setTask: React.Dispatch<React.SetStateAction<{}>>; }' is not assignable to type '{ task: {}; setUser: () => void; }'. Object literal may only specify known properties, and 'setTask' does not exist in type '{ task: {}; setUser: () => void; }'.
         setTask nie umiem tego otypować....*/
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};
