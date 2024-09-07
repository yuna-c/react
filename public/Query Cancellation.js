// 🔥 Query Cancellation : 필요한 네트워크 요청을 제거
// 다운로드 UI 가 있을 때, 또는 UX 저해시키는 불필요한 네트워크 요청을 제거시 사용
// 대용량 fetching을 중간에 취소하거나 사용하지 않는 컴포넌트에서 fetching이 진행 중이면 자동으로 취소시켜 불필요한 네트워크 비용 줄임
// queryFn 의 매개변수로 Abort Signal 을 받을 수 있고, 이를 이용해서 Query 취소

// 🔥 사용방법
// - QueryFunctionContext
// https://tanstack.com/query/latest/docs/framework/react/guides/query-functions

// export const getTodos = async (queryFnContext) => {
//   const { queryKey, pageParam, signal, meta } = queryFnContext;
// 	// queryKey: 배열형태의 쿼리키
// 	// pageParam: useInfiniteQuery 사용 시 getNextPageParam 실행 시 적용
// 	// signal: AbortSignal 을 의미 (네트워크 요청을 중간에 중단시킬 수 있는 장치)
// 	// meta: query에 대한 정보를 추가적으로 메모를 남길 수 있는 string 필드

//   const response = await axios.get("http://localhost:5000/todos", { signal });
//   return response.data;
// };

// useQuery({
//   queryKey: ["todos"],
//   queryFn: getTodos,
// })
// // example: <div onClick={(event) => {}}

// - 페이지 컴포넌트 umount 시 Query 취소
// API 요청 시 기본설정은 컴포넌트가 unmount 되도 네트워크 요청은 중단되지 않음
// GET 요청 시 abort signal 이 옵션으로 들어간 경우에만 unmount 시 자동으로 네트워크 취소

// import axios from 'axios'

// const query = useQuery({
//   queryKey: ['todos'],
//   queryFn: ({ signal }) =>
//     axios.get('/todos', {
//       // Pass the signal to `axios`
//       signal
//     })
// })

// - 수동으로 Query 취소

// const query = useQuery({
//   queryKey: ['todos'],
//   queryFn: async ({ signal }) => {
//     const resp = await fetch('/todos', { signal })
//     return resp.json()
//   }
// })

// const queryClient = useQueryClient()

// return (
//   <button
//     onClick={(e) => {
//       e.preventDefault()
//       queryClient.cancelQueries({ queryKey: ['todos'] })
//     }}
//   >
//     Cancel
//   </button>
// )

// 🔥 사용시 주의사항
// 모든 GET 요청마다 Abort Signal 을 심으면 좋을까
// 불필요한 네트워크 요청을 최소화 한다는 명분으로 단순하게 모든 GET 요청마다 Abort Signal 을 심는 것은 작업부하를 올리고 바람직하지 않습니다.
// 동영상 다운로드 같은 대용량 fetching이 아닌 이상 대부분의 GET 요청은 빠르게 완료 및 캐싱처리되어 성능에 유의미한 영향을 끼치지 못합니다.
// 대용량 fetching 이 있는 경우 또는 Optimistic UI 를 구현할 때처럼 필요한 경우에만 적용하는 것을 권장 드립니다.

// https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// https://tanstack.com/query/latest/docs/framework/react/guides/query-cancellation
