import { useState } from "react"
import { LoginFormOr, LoginRedes } from ".."
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";

import './loginForm.styles.sass'

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
            <p className="loginForm_title">SIGN UP</p>
            <div className="loginForm_form">
                <div className="loginForm_email">
                    <p>Email</p>
                    <div className="login_input">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            name="email_input"
                            id="email_input"
                        />
                    </div>
                </div>
                <div className="loginForm_password">
                    <p>Password</p>
                    <div className="login_input">
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
