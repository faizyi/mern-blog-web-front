import { QueryClient, useQuery} from '@tanstack/react-query'
import { useEffect, useState } from 'react';
import { getUserProfile } from '../user';
import { useNavigate } from 'react-router-dom';
export const userProfileQuery = () => {
  const navigate = useNavigate();
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      try {
        const res = await getUserProfile();
        if (res.status === 200) {
          return res.data.userInfo;
        } else {
          localStorage.removeItem("user");
          navigate("/login");
          return null;
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;
      }
    },
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000
  })
}

export const queryClient = new QueryClient();
