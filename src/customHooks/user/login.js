import { login } from '@/services/user';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const LoginHook = () => {
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await login(data);
      setResponse(res);
      if(res.status == 200) {
        localStorage.setItem("user", JSON.stringify(res.data.userData));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }
  return {
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    response
  }
}
