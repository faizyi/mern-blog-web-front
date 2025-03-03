import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../user';
import { QueryClient} from '@tanstack/react-query'
export const userProfileQuery = () => {
  return useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserProfile,
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000
  })
}

export const queryClient = new QueryClient();
