import { queryClient } from '@/services/react-query/userQuery';
import { logout, signup } from '@/services/user';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const SignupHook = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const onSubmit = async (data) =>{   
        console.log(data);
        try {
            const res = await signup(data)
            if(res.status == 200) {
              localStorage.setItem("user", JSON.stringify(res.data.userData));
              navigate("/");
              console.log(res);
            }
        } catch (error) {
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
    handleLogout
  }
}
