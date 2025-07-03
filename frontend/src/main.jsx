import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Logs from './components/Logs'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Logs/>
  </StrictMode>,
)
