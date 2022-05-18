import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import toast from 'react-hot-toast';
import Loading from '../../Loading/Loading';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    useEffect(() => {
        if (user) {
            toast.success("Login Successful!", { id: "login" });
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);
    if (errors.email || errors.password) {
        if (errors?.email) {
            toast.error(`${errors.email.message}`, { id: "emailError" });
        }
        if (errors?.password) {
            toast.error(`${errors.password.message}`, { id: "passError" })
        }
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);

    }
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        toast.error(`${error.message}`, { id: "firebaseError" });
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div class="card w-full max-w-sm bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: "Email is Require",
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "Invalid email"
                                }
                            })} type="email" placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: "Password is required", minLength: {
                                    value: 8,
                                    message: "Please use at least 8 character"
                                }
                            })} type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <input type="submit" className=' w-full max-w-xs btn btn-primary mt-3' value="Login" />
                    </form>
                    <p className='text-center text-sm'>New here? <span
                        onClick={() => { navigate("/signup") }} className='text-primary cursor-pointer'>
                        Create new account</span></p>
                </div>
            </div>
        </div>
    );
};

export default Login;