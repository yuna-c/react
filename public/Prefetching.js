// 🔥 Prefetching
// 페이지 이동 전에 이동할 페이지의 쿼리를 백그라운드에서 미리 호출 (prefetching)
// 캐시 데이터가 있는 상태로 해당 페이지로 이동 시 로딩없이 바로 UI를 볼 수 있음

// https://tanstack.com/query/latest/docs/framework/react/guides/prefetching

// const prefetchTodos = async () => {
//   // The results of this query will be cached like a normal query
//   // prefetch 할 queryKey와 queryFn 은 이동할 페이지의 쿼리와 동일해야 적절합니다.
//   await queryClient.prefetchQuery({
//     queryKey: ['todos'],
//     queryFn: fetchTodos
//   })
// }
