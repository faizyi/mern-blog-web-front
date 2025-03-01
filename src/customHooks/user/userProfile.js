import { getUserProfile } from '@/services/user'
import React, { useEffect, useState } from 'react'

export const UserProfileHook = () => {
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const fetchUserProfile = async () => {
            try {
                const res = await getUserProfile();
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
