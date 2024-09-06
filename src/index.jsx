import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import App from './App.jsx'
import './styles/index.css'

// yarn add json-server
// yarn json-server db.json --port 4000

// yarn add axios
// yarn add @tanstack/react-query @tanstack/react-query-devtools

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom" />
      <App />
    </QueryClientProvider>
  </StrictMode>
)
