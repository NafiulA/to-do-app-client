import React from 'react';

const TaskRow = ({ task, index, refetch }) => {
    const handleComplete = (id) => {

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td className={`${task.status && "line-through"}`}>{task.task}</td>
            <td className={`${task.status && "line-through"}`}>{task.description}</td>
            <td>{task.status ? "Completed" : <button onClick={() => handleComplete(task._id)} className='btn btn-xs btn-accent'>Complete</button>}</td>
            <td><button className='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default TaskRow;