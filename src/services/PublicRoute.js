import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export const PublicRoute = ({children}) => {
    const user = localStorage.getItem('user');
    const navigate = useNavigate();
    useEffect(()=>{
        if(user) {
            navigate("/")
        }
    },[user, navigate])
  return user ? null : children
}
