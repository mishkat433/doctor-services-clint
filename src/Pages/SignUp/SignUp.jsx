import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SmallSpinner from '../../components/SmallSpinner';
import SocialLogin from '../../components/SocialLogin';
import { AuthContex } from '../../Contex/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, profileUpdate, loading, setLoading } = useContext(AuthContex)

    const location = useLocation();
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const signUpHandle = (data) => {
        const image = data.photo[0]
        const formData = new FormData();
        formData.append('image', image)
        setLoading(true)
        fetch('https://api.imgbb.com/1/upload?key=9843a46e0d5bc7cbfa581dfd80f36a64', {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(photo => {
                createUser(data?.email, data?.password)
                    .then(result => {
                        // const user = result.user;
                        profileUpdate(data?.name, photo?.data?.display_url)
                            .then(() => {
                                toast.success("SignUp Successful")
                                navigate(from, { replace: true })
                            }).catch((error) => {
                                console.log(error.message)
                            });
                    })
                    .catch(err => {
                        toast.error(err.message)
                        setLoading(false)
                    })
            })
    }

    return (
        <div className='w-11/12 mx-auto h-screen flex justify-center items-center'>
            <div className='card w-2/6 shadow-md p-5 '>
                <h2 className='text-2xl text-center font-semibold'> Sign Up</h2>
                <form className='w-full mb-3' onSubmit={handleSubmit(signUpHandle)}>
                    <div className="form-control w-full">
                        <label className="label">Name </label>
                        <input type='text' {...register("name", { required: 'name is required' })} className="input input-bordered w-full " />
                        {errors.name && <p className='text-red-500'>{errors?.name.message}</p>}
                    </div>
                    {/* <div className="form-control w-full">
                        <label className="label">Photo URL </label>
                        <input type='text' {...register("photo")} className="input input-bordered w-full " />
                    </div> */}
                    <div className="form-control w-full">
                        <label className="label">Photo </label>
                        <input type='file' {...register("photo")} className="file-input file-input-bordered file-input-success w-full " />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">Email </label>
                        <input type='email' {...register("email", { required: "Email is required" })} className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500'>{errors?.email.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">Password </label>
                        <input type='password' {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters or longer" },
                            pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "password must be strong" }
                        })} className="input input-bordered w-full " placeholder='Must be uppercase, digit, spacial character' />
                        {errors.password && <p className='text-red-500'>{errors?.password.message}</p>}
                    </div>
                    {
                        loading ? <button className='btn btn-info w-full mt-3'><SmallSpinner /> </button> :
                            <input type="submit" className='btn btn-info w-full mt-3' value='SignUp' />
                    }

                </form>
                <p>Have an account? <Link to='/login' className='text-secondary'>Login </Link> </p>
                <div className="divider">OR</div>
                <SocialLogin />

            </div>
        </div>
    );
};

export default SignUp;