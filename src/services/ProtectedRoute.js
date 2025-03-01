import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');
    useEffect(()=>{
      if(!user) {navigate("/login")}
    },[user, navigate]);
    return user ? children : null
}
