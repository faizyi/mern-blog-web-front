import { forgotPassword } from '@/services/user';
import React, { useState } from 'react'

export const ForgotPasswordHook = () => {
    const [email, setEmail] = useState("");

    const handleSendCode = async (e) => {
      e.preventDefault();
    //   console.log("Reset code sent to:", email);
      const res = await forgotPassword(email);
    };
  return {
    email,
    setEmail,
    handleSendCode
  }
}
