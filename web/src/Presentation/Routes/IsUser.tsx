import { Route, Routes } from "react-router-dom"
import { Admin, Cart, CategoryDetails, Contact, ErrorPage, Favorities, Home, ProductDetails, Profile, Shop } from "../Pages"
import { useAuthContext } from "../Context/authContext"


export const IsUser = () => {
  const { user } = useAuthContext();

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/profile" element={user.role === 'admin' ? <Admin /> : <Profile />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/categoryDetails/:category" element={<CategoryDetails />} />
      <Route path="/favorities" element={<Favorities />}/>
      <Route path="/cart" element={<Cart />}/>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
