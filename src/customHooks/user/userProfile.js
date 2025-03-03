import { getUserProfile } from '@/services/user'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const UserProfileHook = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const fetchUserProfile = async () => {
            try {
                const res = await getUserProfile();
                // console.log(res);
                if(res.response?.data.message == "Unauthorized") {
                    localStorage.removeItem("user");
                    navigate("/login");
                    // return
                }
                setUser(res.data?.userInfo);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserProfile();
      },[])
  return {
    user
  }
}
