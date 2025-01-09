import { FurniroProvider } from './presentation/context'
import { RoutesApp } from './presentation/routes/RoutesApp'

function App() {
  return (
    <FurniroProvider>
      <RoutesApp />
    </FurniroProvider>
  )
}

export default App
