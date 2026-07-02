import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Demo from './components/projects/demo2.tsx'
import Router from './components/Routes/routes.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router/>
    {/* <Demo/> */}
  </StrictMode>,
)
