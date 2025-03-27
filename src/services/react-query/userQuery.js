import { QueryClient, useQuery} from '@tanstack/react-query'
import { getUserProfile } from '../user';
import { useState } from 'react';
export const userProfileQuery = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      try {
        const res = await getUserProfile();
        if (res.status === 200) {
          return res;
        } 
        else if (res.status === 401) {
          localStorage.removeItem("user");
          // navigate("/login");
          queryClient.removeQueries(["userInfo"]);
          return res;
        } else {
          return null;
        }
      } catch (error) {
        return null;
      }
    },
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
  })
}

export const queryClient = new QueryClient();
