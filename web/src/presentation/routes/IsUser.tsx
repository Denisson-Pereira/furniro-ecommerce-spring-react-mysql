import { Route, Routes } from "react-router-dom"
import { About, Contact, ErrorPage, Home, ProductDetails, Profile, Shop } from "../pages"


export const IsUser = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/shop" element={<Shop />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
