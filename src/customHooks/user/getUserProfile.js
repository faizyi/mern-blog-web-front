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
                console.log(res);
                if(res.status == 200) {
                    setUser(res?.data?.userInfo);
                } else {
                    localStorage.removeItem("user");
                    navigate("/login")
                }          
            } catch (error) {
                // localStorage.removeItem("user");
                // navigate("/login")
                console.log(error);
            }
        }
        fetchUserProfile();
      },[])
  return {
    user
  }
}
