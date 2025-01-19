import { Route, Routes } from "react-router-dom"
import { Cart, Contact, ErrorPage, Favorities, Home, ProductDetails, Profile, Shop } from "../pages"


export const IsUser = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/favorities" element={<Favorities />}/>
      <Route path="/cart" element={<Cart />}/>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
