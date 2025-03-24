import { QueryClient, useQuery} from '@tanstack/react-query'
import { useEffect, useState } from 'react';
import { getUserProfile } from '../user';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
export const userProfileQuery = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      try {
        const res = await getUserProfile();
        setResponse(res);
        if (res.status === 200) {
          return res;
        } else if (res.status === 401) {
          localStorage.removeItem("user");
          // navigate("/login");
          queryClient.removeQueries(["userInfo"]);
          return res;
        } else {
          return null;
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        return null;
      }
    },
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
  })
}

export const queryClient = new QueryClient();
