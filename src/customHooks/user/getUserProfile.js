import { getUserProfile } from '@/services/user'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const GetUserProfileHook = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const fetchUserProfile = async () => {
            try {
                const res = await getUserProfile(navigate);
                if(res.response?.data.message == "Unauthorized") {
                    localStorage.removeItem("user");
                    navigate("/login");
                }
                setUser(res?.data?.userInfo);
            } catch (error) {
                localStorage.removeItem("user");
                navigate("/login")
                console.log(error);
            }
        }
        fetchUserProfile();
      },[])
  return {
    user
  }
}
