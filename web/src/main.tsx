import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.sass'
import App from './App.tsx'
import './presentation/translate/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
