// import { useAuth } from '@/useContext/AuthProvider'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoute = ({children}) => {
    const navigate = useNavigate();
    const user = localStorage.getItem('authToken');
    useEffect(()=>{
      if(!user) {navigate("/login")}
    },[user, navigate]);
    return children
}
