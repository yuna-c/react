// 🔥 TanStack Query

// 서버 상태를 관리하기 위한 라이브러리
// 캐싱, 동기화, 무효화(loading/ error/ 이런거)
// 간편하게 작성하고 유지보수성을 높임

// 주요 기능 :
// 데이터 캐싱, 자동 리페칭, 쿼리 무효화
// - 데이터 캐싱: 동일한 데이터를 여러 번 요청하지 않도록 캐싱(메모리 저장 클라이언트에 줌. 한번만)하여 성능을 향상
// - 자동 리페칭: 데이터가 변경되었을 때 자동으로 리페칭하여 최신 상태를 유지
// - 쿼리 무효화: 특정 이벤트가 발생했을 때 쿼리를 무효화하고 데이터를 다시 가져올 수 있음

// - useQuery : 데이터를 가져오기(쿼리 키와 비동기 함수(패칭 함수))
// - useMutation : 데이터를 생성, 수정, 삭제하는 등의 작업에 사용되는 훅([비동기 작업]을 쉽게 처리한다는 말 안에는 [작업이 완료된 후에 관련된 쿼리를 무효화]하는 과정이 포함)
// - invalidateQueries : 특정 쿼리를 무효화하여 데이터를 다시 패칭하게 하는 함수, 데이터가 항상 최신 상태로 유지, 새로운 할 일을 추가한 후 기존의 할 일 목록을 다시 가져오도록

// - 서버 상태(외부 API) vs 클라이언트 상태
// 클라이언트 상태는 UI 관련된 일시적인 데이터(예: 폼 입력값, 다크모드, 토글)를 의미
// 서버 상태는 서버에서 가져오는 데이터(예: API 응답), 캐싱, 동기화, 재검증(revalidate)

// 컴포넌트 내부에서 관리하는 state : 지역 state, props drilling
// 부분 전역, 전역상태 관리 state : useQuery, redux

// 🔥 useQuery : get R
// 🔥 useMutation : modify CUD
// 🔥 invalidateQueries : refresh

// 🔥 TanStack Query 주요개념 복습

// - Fetching: 서버에서 데이터를 가져옴
// - Caching: 가져온 데이터를 캐싱하여, 동일한 데이터를 반복해서 요청X
// - Synchronizing: 서버의 데이터와 캐시된 데이터를 동기화
// - Updating: 서버의 데이터를 쉽게 업데이트하고, 이를 캐시에 반영

// 🔥 stale-while-revalidate(swr) 전략
// - 최신 데이터가 도착하기 전까지 기존 캐시 데이터를 사용하는 전략

// Cache-Control: max-age=1, stale-while-revalidate=59

// 🔥 캐시 데이터는 어디에 보관
// - 캐시 데이터를 전역적으로 관리(QueryClientProvider)

// cache context, cache data
// TanStack Query가 내부적으로 이용하는 Context : 캐시 컨텍스트
// 그 안에 저장되어 사용되는 데이터 : 캐시 데이터

// 예시 src > main.jsx

// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <QueryClientProvider client={queryClient}>
//     <App />
//   </QueryClientProvider>
// );

// 🌞🌞🌞🌞🌞
// 1. 리액트에서 비동기 처리 방법

// 🌞 컴포넌트 마운트 시(useEffect) 처리
// 데이터 패팅하기
// 로딩 및 에러처리

// - 등장 배경
// 비동기 로직의 복잡성 해결 필요 :
// useEffect와 useState를 사용한 비동기 데이터 처리 방식은 상태 관리가 복잡하고 코드 중복이 많아 유지보수 난이도 상승
// Redux Thunk와 같은 미들웨어를 사용해도 비동기 로직의 테스트가 복잡하고 보일러플레이트 코드가 많이 생기기 때문에 더 효율적인 도구 필요

// 서버 상태 관리의 어려움 :
// 서버 상태는 클라이언트 상태와 달리 캐싱, 동기화, 재검증 등 관리해야 할 요소가 많아 기존 방법으로는 관리 어려움

// - 문제점
// 상태 관리의 복잡성(각 상태에 따른 로직이 컴포넌트 내부에 분산)
// 중복된 코드
// 비즈니스 로직의 분리 부족( 핵심 동작을 정의하는 코드, UI 혼합으로 가독성 하락)
// 서버 상태 관리의 어려움

// - 서버 상태(외부 API) vs 클라이언트 상태
// 클라이언트 상태는 UI 관련된 일시적인 데이터(예: 폼 입력값)를 의미
// 서버 상태는 서버에서 가져오는 데이터(예: API 응답), 캐싱, 동기화, 재검증(revalidate)

// 🌞 해결책
// 1. Redux Middleware 이용
// 액션이 리듀서에 도달하기 전에 중간에서 가로채서 추가적인 작업을 수행
// 비동기 로직을 처리(Redux Thunk, Redux Saga, Redux Observable …), 로그를 기록(redux-logger), 에러를 처리

// - 일반 redux의 처리 방식
// UI 컴포넌트에서 dispatch ->
// dispatch가 일어날 때 action 객체를 dispatch ->
// action 객체는 리듀서로 전달되어 Redux store를 업데이트

// - redux thunk의 처리 방식
// UI 컴포넌트에서 dispatch ->
// dispatch가 일어날 때 thunk 함수(비동기 작업 포함)를 dispatch ->
// 전달된 thunk 함수에 의해 Redux Thunk 미들웨어가 이 함수를 호출하고, 함수 안에서 비동기 작업을 수행 ->
// 비동기 로직이 수행된 이후 필요에 따라 액션 객체를 별도로 생성하여 dispatch ->
// dispatch된 액션 객체는 리듀서로 전달되어 Redux store를 업데이트

// - Redux Thunk
// 상태 관리의 일관성 (Redux Thunk를 사용하여 비동기 로직을 중앙에서 관리)
// 비즈니스 로직의 분리(비동기 로직을 액션 크리에이터로 분리하여 UI 로직과 비즈니스 로직을 분리하고, 유지보수성과 가독성을 향상)
// 로딩 및 에러 상태 관리의 용이성 (Redux Thunk와 Redux Toolkit을 사용하여 isLoading과 isError 등의 상태를 중앙에서 일관되게 관리, 상태 변화에 따른 UI 업데이트가 용이)

// - 불편한 점
// 복잡성 증가 : 액션 크리에이터와 리듀서의 코드가 길고, 보일러플레이트 코드(반복적이고 틀에 박힌 코드)가 많아져 유지보수가 어려움
// 테스트가 복잡 : 액션 크리에이터를 테스트하는 것이 복잡하며, 다양한 응답 상태와 비동기 작업을 시뮬레이션하기 위한 별도의 장치가 필요해 테스트 코드가 복잡

// 🌞 TanStack Query(React Query) : 대안
// 복잡한 비동기 로직을 단순화
// 캐싱, 동기화, 리페칭
// 선언적인 데이터 패칭, 자동 리페칭, 캐싱 등 다양한 기능을 제공하여 서버 상태 관리를 더 쉽고 효율적

// 🌞 React Query? TanStack Query
// React Query는 TanStack Query의 이전 이름
// v4부터는 TanStack Query로 명칭이 변경

// - 성능 최적화
// - 더 나은 타입스크립트 지원
// - 다양한 프레임워크와의 호환성이 크게 개선
// - 쿼리 상태 관리와 캐싱 메커니즘이 더욱 효율적으로 개선

// 🌞 LifeCycle
// TanStack Query의 생명주기는 데이터가 캐시되고, 사용되고, 갱신되는 과정

// TanStack Query의 생명주기
// ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/83c75a39-3aba-4ba4-a792-7aefe4b07895/bd3f993b-c490-4373-b7b4-9d97e672948c/Untitled.png)

// | 상태 | 설명 |
// | --- | --- |
// | fresh | 데이터를 새로 패칭할 필요가 없는 상태입니다. `staleTime`이 지나지 않은 상태로, 캐시 데이터를 그대로 사용할 수 있습니다. |
// | stale | 데이터를 새로 패칭해야 하는 상태입니다. `staleTime`이 지난 후로, 새로운 데이터를 가져오기 위해 쿼리가 실행됩니다. |
// | active | 현재 컴포넌트에서 사용 중인 쿼리 상태입니다. 컴포넌트가 마운트되어 쿼리를 사용하고 있을 때를 말합니다. |
// | inactive | 더 이상 사용되지 않는 쿼리 상태입니다. 컴포넌트가 언마운트되거나 쿼리가 더 이상 필요하지 않을 때를 말합니다. |
// | deleted | 캐시에서 제거된 쿼리 상태입니다. `gcTime` 이 지나면 쿼리가 캐시에서 삭제되어 이 상태가 됩니다. |
// | fetching | 데이터를 서버에서 가져오고 있는 상태입니다. 이 상태에서는 `isFetching`이 true로 설정됩니다. |

// default config(기본 설정)
// | 기본 설정 | 의미 |
// | --- | --- |
// | staleTime: 0 | useQuery 또는 useInfiniteQuery에 등록된 queryFn 을 통해 fetch 받아온 데이터는 항상 stale data 취급 |
// | refetchOnMount: true | useQuery 또는 useInfiniteQuery 가 있는 컴포넌트가 마운트 시 stale data 를 refetch 자동 실행 |
// | refetchOnWindowFocus: true | 실행중인 브라우저 화면을 focus 할 때 마다 stale data를 refetch 자동 실행 |
// | refetchOnReconnect: true | Network 가 끊겼다가 재연결 되었을 때 stale data를 refetch 자동 실행 |
// | gcTime(cacheTime): 5분 (1000 * 60 * 5 ms) | useQuery 또는 useInfiniteQuery가 있는 컴포넌트가 언마운트 되었을 때 inactive query라 부르며, inactive 상태가 5분 경과 후 GC(가비지콜렉터)에 의해 cache data 삭제 처리 |
// | retry: 3 | useQuery 또는 useInfiniteQuery에 등록된 queryFn 이 API 서버에 요청을 보내서 실패하더라도 바로 에러를 띄우지 않고 총 3번까지 재요청을 자동으로 시도 |
