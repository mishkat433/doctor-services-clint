import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin';
import { AuthContex } from '../../Contex/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContex);
    const [loginError, setLoginError] = useState('')

    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                // const user = result.user;
                setLoginError('')
                toast.success("Login Successful")
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoginError(err.message)
                toast.error("Something Wrong")
            })
    }

    return (
        <div className='w-11/12 mx-auto h-screen flex justify-center items-center'>
            <div className='card w-2/6 shadow-md p-5 '>
                <h2 className='text-2xl text-center font-semibold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className='w-full mb-3'>
                    <div className="form-control w-full">
                        <label className="label">Email </label>
                        <input type='email' {...register("email", { required: "Email is required" })} className="input input-bordered w-full " />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">Password </label>
                        <input type='password' {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters or longer" } })} className="input input-bordered w-full" />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        <span>Forget password?</span>
                    </div>
                    <input type="submit" className='btn btn-info w-full mt-3' value='Login' />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal <Link to='/signup' className='text-secondary'>Create an Account </Link> </p>
                <div className="divider">OR</div>
                <SocialLogin />
            </div>
        </div>
    );
};

export default Login;