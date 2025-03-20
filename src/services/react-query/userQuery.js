import { GetUserProfileHook } from '@/customHooks/user/getUserProfile';
import { QueryClient, useQuery} from '@tanstack/react-query'
export const userProfileQuery = () => {
  const {user} = GetUserProfileHook();  
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => user,
    enabled: !!user,
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000
  })
}

export const queryClient = new QueryClient();
