import { login } from '@/services/user';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
export const LoginHook = () => {
  const dispatch = useDispatch();
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    dispatch(showLoader());
    try {
      const res = await login(data);
      setResponse(res);
      if(res.status == 200) {
        localStorage.setItem("user", JSON.stringify(res.data.userData));
        navigate("/");
      }
    } catch (error) {
      dispatch(hideLoader());
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
