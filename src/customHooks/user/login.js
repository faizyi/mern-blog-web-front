import { login } from '@/services/user';
import { useAuth } from '@/useContext/AuthProvider';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const LoginHook = () => {
    const navigate = useNavigate();
    // const {setUser} = useAuth();
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const onSubmit = async (data) =>{
        try {
            const res = await login(data);
            console.log(res);
            if(res.status !== 200) {return}
            localStorage.setItem('authToken', JSON.stringify(res.data.userData));
            // setUser(res.data?.userData)
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
