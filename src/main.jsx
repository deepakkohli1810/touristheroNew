import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HashRouter>
    <App/>
  </HashRouter>
  </StrictMode>,
)
