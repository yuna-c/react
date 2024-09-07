import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

// 🌞 global 설정 변경
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: 5000
//     }
//   }
// })

// 🌞 useQuery 별 변경
// const { isPending ,isFetching, data: todos } = useQuery({
//   queryKey: ["todos"],
//   queryFn: getTodos,
//   staleTime: 5000,
// });

// 🌞 refetchOn + @
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false
//     }
//   }
// })

// refetchOnMount : Main → Empty → Main 이동했을 때. 즉, 마운트 시, 자동으로 refetch하는지 확인
// refetchOnWindowFocus : 윈도우가 focus를 잃었다가 다시 얻었을 때, 자동으로 refetch 하는지 확인
// refetchOnReconnect : wifi를 껐다가 켜보세요. refetch가 일어나는지 확인

// 🌞 gcTime(cacheTime)
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       gcTime: 2000
//     }
//   }
// })

// 🌞 retry
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 5
//     }
//   }
// })

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
  </QueryClientProvider>
)

// yarn add json-server
// yarn json-server db.json --port 4000
// yarn add axios
// yarn add @tanstack/react-query @tanstack/react-query-devtools
// yarn add react-router-dom
