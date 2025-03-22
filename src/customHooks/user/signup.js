import { queryClient } from '@/services/react-query/userQuery';
import { logout, signup } from '@/services/user';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
export const SignupHook = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const [response, setResponse] = useState(null);
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const onSubmit = async (data) =>{ 
        dispatch(showLoader());  
        try {
            const res = await signup(data)
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
      const handleLogout = async () => {
          const res = await logout();
          localStorage.removeItem('user');
          queryClient.removeQueries(['userInfo']);
          navigate("/");
      }
  return {
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit,
    handleLogout,
    response
  }
}
