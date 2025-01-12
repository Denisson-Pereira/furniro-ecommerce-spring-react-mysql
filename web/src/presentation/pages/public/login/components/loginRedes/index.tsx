import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";


export const LoginRedes = () => {
    return (
        <div className="loginRedes_container">
            <div className="loginRedes_icons">
                <FaGoogle />
            </div>
            <div className="loginRedes_icons">
                <FaFacebookF />
            </div>
            <div className="loginRedes_icons">
                <IoLogoLinkedin />
            </div>
        </div>
    )
}
