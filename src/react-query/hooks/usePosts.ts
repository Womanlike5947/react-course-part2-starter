import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  // page: number;
  pageSize: number;
}

// const usePosts = (userId: Number | undefined) => {
const usePosts = (query: PostQuery) => {
  // const fetchPosts = () =>
  //   axios
  //     .get<
  //       Post[]
  //     >('https://jsonplaceholder.typicode.com/posts', { params: { _start: (query.page - 1) * query.pageSize, _limit: query.pageSize } })
  //     .then((res) => res.data);

  return useInfiniteQuery<Post[], Error>({
    //  /users/1/posts
    queryKey: ['posts', query],
    // queryFn: fetchPosts,
    queryFn: ({ pageParam = 1 }) =>
      axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      }),
    staleTime: 1 * 60 * 1000, // 1 minute
    // Get a nicer user experience when switching between pages
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      // 1 -> 2
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};
export default usePosts;
