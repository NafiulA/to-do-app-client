import React from 'react';
import toast from 'react-hot-toast';

const TaskRow = ({ task, index, refetch }) => {
    const handleComplete = (id) => {
        fetch(`http://localhost:5000/tasks?id=${id}`, {
            method: "PUT"
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success("Congrats on finishing the task", { id: "taskDone" });
                    refetch();
                }
            });
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