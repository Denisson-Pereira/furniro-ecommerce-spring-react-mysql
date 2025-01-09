import { Route, Routes } from "react-router-dom"
import { ErrorPage, ProductDetails, Profile, Shop } from "../pages"


export const IsUser = () => {
  return (
    <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/productDetails/:id" element={<ProductDetails />} />

        <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}
