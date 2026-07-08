import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import './style/index.css'
import AppRoutes from './Router/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
      <Analytics />
    </BrowserRouter>
  </StrictMode>,
)
