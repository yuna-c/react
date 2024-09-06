import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
// yarn add json-server
// yarn json-server db.json --port 4000

// yarn add axios

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
