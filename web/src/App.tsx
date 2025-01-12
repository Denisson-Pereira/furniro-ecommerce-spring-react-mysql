import { AuthContextProvider } from './presentation/context/authContext'
import { RoutesApp } from './presentation/routes/RoutesApp'

function App() {
  return (
    <AuthContextProvider>
      <RoutesApp />
    </AuthContextProvider>
  )
}

export default App
