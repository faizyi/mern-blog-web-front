import { useQuery, QueryClient } from '@tanstack/react-query'
import { getAllBlog } from '../blog'
export const blogQuery = () => {
  return useQuery({
    queryKey: ["allBlogs"],
    queryFn: async () => {
        try {
            const res = await getAllBlog();
            if(res.status == 201) {
                return res
            }
        } catch (error) {
            return null;
        }
    },
    staleTime: 24 * 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000,
  })
}

export const queryClient = new QueryClient();
