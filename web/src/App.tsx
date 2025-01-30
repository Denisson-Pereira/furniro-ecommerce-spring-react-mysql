import { AuthContextProvider } from './presentation/context/authContext'
import { CartContextProvider } from './presentation/context/cartContext'
import { FavoritiesContextProvider } from './presentation/context/favoritiesContext'
import { RoutesApp } from './presentation/routes/RoutesApp'

function App() {
  return (
    <CartContextProvider>
      <FavoritiesContextProvider>
        <AuthContextProvider>
          <RoutesApp />
        </AuthContextProvider>
      </FavoritiesContextProvider>
    </CartContextProvider>

  )
}

export default App
