import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

export const TaskList = () => {
  const { task, setTask } = useContext(TaskContext);

  return (
    <div className="w-5/6 m-auto text-center">
      <h1 className="text-center text-3xl mb-4">Task List</h1>
    </div>
  );
};
