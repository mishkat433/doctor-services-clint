import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Contex/AuthProvider';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContex)
    const [loginError, setLoginError] = useState('')

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const googleSignUpHandle = () => {
        googleLogin()
            .then(result => {
                // const user = result.user;
                setLoginError('')
                toast.success("Login Successful")
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoginError(err.message);
                toast.error("Something wrong")
            })
    }

    return (
        <div>
            {loginError && <p className='text-red-600'>{loginError}</p>}
            <button onClick={googleSignUpHandle} className='btn btn-outline w-full btn-primary'> continue with google</button>
        </div>
    );
};

export default SocialLogin;