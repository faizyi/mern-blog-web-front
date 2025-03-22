import { resetPassword } from '@/services/user';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export const ResetPasswordHook = () => {
    const navigate = useNavigate();
    const [response, setResponse] = useState(null);
    const { token } = useParams();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        try {
            const res = await resetPassword(password, token);
            setResponse(res);
            if(res.status == 200) {
                navigate("/login");
            }
        } catch (error) {
            console.log(error); 
        }

    };
    return {
        password, setPassword, 
        confirmPassword, setConfirmPassword,
         handleResetPassword,
         response
    }
}
