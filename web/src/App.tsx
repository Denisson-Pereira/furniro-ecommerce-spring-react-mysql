import { AuthContextProvider } from './Presentation/Context/authContext'
import { CartContextProvider } from './Presentation/Context/cartContext'
import { FavoritiesContextProvider } from './Presentation/Context/favoritiesContext'
import { RoutesApp } from './Presentation/Routes/RoutesApp'

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
