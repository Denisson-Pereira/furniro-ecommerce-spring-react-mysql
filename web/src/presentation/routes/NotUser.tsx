import { Route, Routes } from "react-router-dom"
import { About, Contact, Home, Login } from "../pages"

export const NotUser = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<Login />} />
    </Routes>
  )
}
