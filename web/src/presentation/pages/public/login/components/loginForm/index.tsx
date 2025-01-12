import { useState } from "react"
import { LoginFormOr, LoginRedes } from ".."
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";

export const LoginForm = () => {
    const [visible, setVisible] = useState<boolean>(false);

    const handleIcon = () => {
        if (visible) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    return (
        <div className="loginForm_container">
            <p>SIGN UP</p>
            <div className="loginForm_form">
                <div className="loginForm_email">
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email_input"
                        id="email_input"
                    />
                </div>
                <div className="loginForm_password">
                    <p>Password</p>
                    <input
                        type={visible ? 'text' : 'password'}
                        placeholder="******"
                        name="password_input"
                        id="password_input"
                    />
                    <div className="loginForm_icon_eye" onClick={handleIcon}>
                        {visible ? <IoMdEye /> : <FaEyeSlash />}
                    </div>
                </div>
                <div className="loginForm_btn">
                    <button>SIGN UP</button>
                </div>
                <LoginFormOr />
                <LoginRedes />
            </div>
        </div>
    )
}
