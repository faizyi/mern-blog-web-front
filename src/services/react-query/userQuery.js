import { useQuery } from '@tanstack/react-query';
import { QueryClient} from '@tanstack/react-query'
import { UserProfileHook } from '@/customHooks/user/userProfile';
export const userProfileQuery = () => {
  const {user} = UserProfileHook();
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => user,
    enabled: !!user,
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000
  })
}

export const queryClient = new QueryClient();
