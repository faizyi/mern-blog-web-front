import { signup } from '@/services/user';
import { useAuth } from '@/useContext/AuthProvider';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const SignupHook = () => {
    // const { setUser } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: {errors} } = useForm();
    const onSubmit = async (data) =>{   
        console.log(data);
        try {
            const res = await signup(data)
            if(!res.status === 200) {return}
            localStorage.setItem('authToken', JSON.stringify(res.data.userData));
            // setUser(res.data.userData)
            reset()
            navigate("/")
            console.log(res);
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
