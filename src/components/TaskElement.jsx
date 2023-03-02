import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteTask } from '../apiCalls/task.calls';

export const TaskElement = ({ prevTask }) => {
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const response = await deleteTask(prevTask._id);
      if (response.status === 200) {
        alert(response.data.message);
        // window.location.reload();    //doesnt refresh page :/
        navigate('/user/profile');
      } else {
        alert(response.response.data.message);
      }
    }
  };

  return (
    <tr>
      <td className="border px-4 py-2">{prevTask.title}</td>
      <td className="border px-4 py-2">{prevTask.description}</td>
      <td className="border px-4 py-2">
        {prevTask.completed ? 'Completed' : 'Not yet...'}
      </td>
      <td className="border px-4 py-2">
        <button className="bg-blue-700 text-white px-2 rounded">View</button>
      </td>
      <td className="border px-4 py-2">
        <button className="bg-green-600 text-white px-2 rounded">Update</button>
      </td>
      <td className="border px-4 py-2">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-2 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};