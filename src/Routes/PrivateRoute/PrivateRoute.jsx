import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContex } from '../../Contex/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { loginUser, loading } = useContext(AuthContex);
    const location = useLocation()
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    if (loginUser?.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoute;