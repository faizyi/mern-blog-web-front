import { forgotPassword } from '@/services/user';
import React, { useState } from 'react'

export const ForgotPasswordHook = () => {
  const [response, setResponse] = useState(null);
  const [email, setEmail] = useState("");

  const handleSendCode = async (e) => {
    e.preventDefault();
    try {
      const res = await forgotPassword(email);
      setResponse(res);
    } catch (error) {
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
