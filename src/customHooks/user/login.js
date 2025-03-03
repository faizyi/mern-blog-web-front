import { login } from '@/services/user';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const LoginHook = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const onSubmit = async (data) =>{
        try {
            const res = await login(data);
            if(res.status !== 200) {return}
            localStorage.setItem('user', JSON.stringify(res.data.userData));
            reset()
            navigate("/")
        } catch (error) {
            console.log(error); 
        }
    }
  return {
    register,
    handleSubmit,
    reset,
    errors,
    onSubmit
  }
}
