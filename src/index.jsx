import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

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
