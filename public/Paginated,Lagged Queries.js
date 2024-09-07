// 🔥 Paginated
// 다른 페이지 클릭 시 매번 Loading UI를 보여주기보다는 기존 UI를 유지하다가 서버로부터 새로운 데이터를 받아왔을 때 바꾸는 방식을 적용
// useQuery의 옵션 중 keepPreviousData를 true 로 바꾸면 이전 캐시데이터를 기반으로 isLoading 여부를 판단

// https://tanstack.com/query/latest/docs/framework/react/guides/paginated-queries

// 🔥 Infinite Queries
// Data Fetching 이 일어날 때 마다 기존 리스트 데이터에 Fetched Data 를 추가하고자 할 때 유용하게 사용할 수 있는 hook
// 더보기 UI 또는 무한스크롤 UI 에 사용하기에 적합

// https://coffeeandcakeandnewjeong.tistory.com/52

// const fetchProjects = async ({ pageParam = 0 }) => {
//   const res = await fetch('/api/projects?cursor=' + pageParam)
//   return res.json()
// }

// const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } = useInfiniteQuery({
//   queryKey: ['projects'],
//   queryFn: fetchProjects,
//   getNextPageParam: (lastPage, pages) => lastPage.nextCursor
// })

// 실행 순서 정리
// queryFn 실행 → 캐시 데이터 등록 { pages, pageParam }
// → getNextPageParam 실행(리턴된 NextPageParam는 훅 내부 메모리에 저장.캐시에 저장X)
// → (NextPageParam 이 undefined이 아니면) hasNextPage true로 상태변경
// →  fetchNextPage 실행
// → queryFn 실행(이 때 내부적으로 저장되어 있던 NextPageParam을 queryFn 의 매개변수로 넘겨줌)

// pages 와 pageParams 를 갖는 캐시 데이터
// - useQuery 에서는 QueryFn 의 반환값이 캐시데이터로 등록
// - useInfiniteQuery 에서는  QueryFn 의 반환값은 pages 배열의 요소로 추가되고, 매개변수로 받았던 pageParam은 pageParams 배열의 요소로 추가

// useInfiniteQuery 사용 시 주의사항
// https://tanstack.com/query/latest/docs/framework/react/guides/infinite-queries
// https://www.heropy.dev/p/ydKoQO
// https://www.npmjs.com/package/react-intersection-observer
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
