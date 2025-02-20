import { Footer, NavScroll } from "../../../Components"
import { CreateProduct, HeaderAdmin, InfoAdmin } from "./components"

export const Admin = () => {
  return (
    <div className="admin_container">
        <NavScroll />
        <HeaderAdmin />
        <InfoAdmin />
        <CreateProduct />
        <Footer />
    </div>
  )
}
