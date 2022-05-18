import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const AddTasks = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    if (errors) {
        if (errors?.taskName) {
            toast.error(`${errors.taskName.message}`, { id: "taskNameErr" });
        }
        if (errors?.taskDescription) {
            toast.error(`${errors.taskDescription.message}`, { id: "taskDescriptionErr" });
        }
    }
    const onSubmit = data => {
        const body = {
            userEmail: data.email,
            task: data.taskName,
            description: data.taskDescription
        }
        fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Task added", { id: "taskAdd" });
                    reset();
                }
            })
    }
    return (
        <div>
            <h3 className='text-xl p-2'>Add new tasks</h3>
            <div className='pl-2'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input {...register("email", { value: user?.email })} type="email" disabled class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Task Name</span>
                        </label>
                        <input {...register("taskName", { required: "Task Name is required" })} type="text" placeholder='Task Name' class="input input-bordered w-full max-w-xs" />
                    </div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Task Description</span>
                        </label>
                        <input {...register("taskDescription", { required: "Task description is required" })} type="text" placeholder='Task Description' class="input input-bordered w-full max-w-xs" />
                    </div>
                    <input type="submit" className="btn btn-primary w-full max-w-xs mt-3" value="Add Task" />
                </form>
            </div>
        </div>
    );
};

export default AddTasks;