import React from 'react';

const MyTasks = () => {
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
                                <th>Complete</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyTasks;