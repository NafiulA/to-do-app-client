import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import TaskRow from './TaskRow';

const MyTasks = () => {
    const [user] = useAuthState(auth);
    const { data: tasks, isLoading, refetch } = useQuery("tasks", () => fetch(`http://localhost:5000/tasks/${user?.email}`).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-xl p-2'>My Tasks</h3>
            <div>
                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task</th>
                                <th>Description</th>
                                <th>Complete</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task, index) => <TaskRow
                                    key={task._id}
                                    index={index}
                                    task={task}
                                    refetch={refetch}></TaskRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyTasks;