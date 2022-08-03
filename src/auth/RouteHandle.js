import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RouterHandle({children}) {
    const auth = useSelector(({usuario}) => usuario);
    let location = useLocation();
    if(!auth.currentUser) {
        return <Navigate to="/" state={{from: location}} replace />;
    }
    return children;
}
export default RouterHandle;