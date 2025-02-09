import { Route, Routes } from "react-router-dom"
import { Contact, Home, Login } from "../Pages"

export const NotUser = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<Login />} />
    </Routes>
  )
}
