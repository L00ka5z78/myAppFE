import * as React from 'react';
import {createContext, useState} from "react";

export const TaskContext = createContext({ task: {}, setUser: () => {} });

export const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState({});

  /**  type '{ task: {}; setTask: React.Dispatch<React.SetStateAction<{}>>; }' is not assignable to type '{ task: {}; setUser: () => void; }'. Object literal may only specify known properties, and 'setTask' does not exist in type '{ task: {}; setUser: () => void; }'.
   setTask nie umiem tego otypować....*/

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};
