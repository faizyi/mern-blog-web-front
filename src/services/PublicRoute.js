import { useAuth } from '@/useContext/AuthProvider'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const PublicRoute = ({children}) => {
    const user = localStorage.getItem('authToken');
    const navigate = useNavigate();
    useEffect(()=>{
        if(user) {
            navigate("/")
        }
    },[user, navigate])
    // if(user) {return null}
  return children
}
