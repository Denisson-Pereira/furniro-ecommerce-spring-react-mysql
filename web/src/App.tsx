import { AuthContextProvider } from './presentation/context/authContext'
import { FavoritiesContextProvider } from './presentation/context/favoritiesContext'
import { RoutesApp } from './presentation/routes/RoutesApp'

function App() {
  return (
    <FavoritiesContextProvider>
      <AuthContextProvider>
        <RoutesApp />
      </AuthContextProvider>
    </FavoritiesContextProvider>
  )
}

export default App
