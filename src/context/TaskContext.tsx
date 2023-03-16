// import * as React from 'react';
// import {createContext, useState} from "react";

// export const TaskContext = createContext({ task: {}, setUser: () => {} });

// export const TaskContextProvider = ({ children }) => {
//   const [task, setTask] = useState({});

//   /**  type '{ task: {}; setTask: React.Dispatch<React.SetStateAction<{}>>; }' is not assignable to type '{ task: {}; setUser: () => void; }'. Object literal may only specify known properties, and 'setTask' does not exist in type '{ task: {}; setUser: () => void; }'.
//    setTask nie umiem tego otypować....*/

//   return (
//     <TaskContext.Provider value={{ task, setTask }}>
//       {children}
//     </TaskContext.Provider>
//   );
// };

import React, {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { ITodo } from '../types/todoType';

interface IUserProps {
  children: ReactNode;
}
interface ITaskContext {
  task: Array<ITodo>;
  setTask: Dispatch<SetStateAction<any>>;
}

export const TaskContext = createContext<ITaskContext>({
  task: ([] as Array<ITodo>) || ({} as ITodo),
  setTask: () => {},
});

export const TaskContextProvider = ({ children }: IUserProps) => {
  const [task, setTask] = useState<any>({});
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};
