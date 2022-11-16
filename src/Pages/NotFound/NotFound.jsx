import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import notFound from "../../assets/images/pageNotFound.gif";

const NotFound = () => {
    const error = useRouteError()
    return (
        <div className='w-11/12 mx-auto flex flex-col justify-center items-center h-screen'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-red-500'>{error.status}</h1>
                <p className='text-3xl text-red-500'>{error.statusText}</p>
            </div>
            <img className='w-2/5 h-[400px]' src={notFound} alt="" />
            <Link to="/" className='btn bg-black'>Back to home</Link>
        </div>
    );
};

export default NotFound;