import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Logs from './components/Logs'
import { LogProvider } from './context/LogContext' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LogProvider>
      <Logs />
    </LogProvider>
  </StrictMode>
)
