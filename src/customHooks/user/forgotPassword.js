import { forgotPassword } from '@/services/user';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
export const ForgotPasswordHook = () => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState(null);
  const [email, setEmail] = useState("");

  const handleSendCode = async (e) => {
    e.preventDefault();
    dispatch(showLoader());
    try {
      const res = await forgotPassword(email);
      setResponse(res);
    } catch (error) {
      dispatch(hideLoader());
      console.log(error);
    }
  };
  return {
    email,
    setEmail,
    handleSendCode,
    response
  }
}
