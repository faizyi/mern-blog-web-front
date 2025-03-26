import { getBlogById } from "@/services/blog";
import { useQuery, QueryClient } from "@tanstack/react-query"

export const BlogByIdQuery = (id) => {
  return useQuery({
    queryKey: ["blogById"],
    queryFn: async () => {
        try {
            const res = await getBlogById(id);
            if(res.status == 201) {
                return res
            }
        } catch (error) {
            return error;
        }
    },
    refetchOnWindowFocus: false,
    retry: false,
    // refetchOnMount: false,
    // retryOnMount: false,
    // refetchInterval: false,
    // refetchIntervalInBackground: false,
    // staleTime: 24 * 60 * 60 * 1000,
    // cacheTime: 24 * 60 * 60 * 1000,
  })
}

export const queryClient = new QueryClient();
