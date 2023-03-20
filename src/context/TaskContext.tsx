import React, {
    useState,
    createContext,
    ReactNode,
    Dispatch,
    SetStateAction,
} from 'react';
import {ITodo} from '../types/todoType';

interface IUserProps {
    children: ReactNode;
}

interface ITaskContext {
    task: Array<ITodo>;
    setTask: Dispatch<SetStateAction<any>>;
}

export const TaskContext = createContext<ITaskContext>({
    task: ([] as Array<ITodo>) || ({} as ITodo),
    setTask: () => {
    },
});

export const TaskContextProvider = ({children}: IUserProps) => {
    const [task, setTask] = useState<any>({});
    return (
        <TaskContext.Provider value={{task, setTask}}>
            {children}
        </TaskContext.Provider>
    );
};
