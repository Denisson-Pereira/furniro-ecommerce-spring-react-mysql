import { Footer, NavScroll } from "../../../Components"
import { HeaderAdmin, InfoAdmin } from "./components"


export const Admin = () => {
  return (
    <div className="admin_container">
        <NavScroll />
        <HeaderAdmin />
        <InfoAdmin />
        <Footer />
    </div>
  )
}
