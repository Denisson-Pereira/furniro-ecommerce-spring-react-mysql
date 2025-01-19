import { Route, Routes } from "react-router-dom"
import { Contact, ErrorPage, Home, ProductDetails, Profile, Shop } from "../pages"
import { Favorities } from "../pages/private/favorities"


export const IsUser = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/favorities" element={<Favorities />}/>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
