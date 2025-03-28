import { QueryClient, useQuery} from '@tanstack/react-query'
import { getUserProfile } from '../user';
export const userProfileQuery = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      try {
        const res = await getUserProfile();
        if (res.status === 200) {
          return res;
        } else if (res.status === 401) {
          localStorage.removeItem("user");
          return null; // Prevent errors and unnecessary API calls
        }
      } catch (error) {
        if (!token) {
          return null;
        }
        console.error("Profile Fetch Error:", error);
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
