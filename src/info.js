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
