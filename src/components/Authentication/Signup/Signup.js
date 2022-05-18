import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';

const Signup = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    useEffect(() => {
        if (user) {
            toast.success("Signup Successful!", { id: "signup" });
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);
    if (errors.name || errors.email || errors.password) {
        if (errors?.name) {
            toast.error(`${errors.name.message}`, { id: "nameError" });
        }
        if (errors?.email) {
            toast.error(`${errors.email.message}`, { id: "emailError" });
        }
        if (errors?.password) {
            toast.error(`${errors.password.message}`, { id: "passError" })
        }
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        updateProfile({ displayName: data.name });

    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    if (error) {
        toast.error(`${error.message}`, { id: "firebaseError" });
    }
    if (updateError) {
        toast.error(`${updateError.message}`, { id: "updateError" });
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card w-full max-w-sm bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: "Name is Require"
                            })} type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: "Email is Require",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Invalid email"
                                }
                            })} type="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "Password is required", minLength: {
                                    value: 8,
                                    message: "Please use at least 8 character"
                                }
                            })} type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <input type="submit" className=' w-full max-w-xs btn btn-primary mt-3' value="Sign Up" />
                    </form>
                    <p className='text-center text-sm'>Already have an account? <span
                        onClick={() => { navigate("/login") }} className='text-primary cursor-pointer'>
                        Please Login</span></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;