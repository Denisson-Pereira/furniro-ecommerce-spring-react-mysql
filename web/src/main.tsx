import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.sass'
import App from './App.tsx'
import './Presentation/Translate/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
