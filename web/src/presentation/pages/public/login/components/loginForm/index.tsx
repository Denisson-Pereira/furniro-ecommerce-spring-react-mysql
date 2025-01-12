import { useState } from "react";
import { LoginFormOr, LoginRedes } from "..";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import "./loginForm.styles.sass";
import { loginServiceLocator } from "../../../../../../infra/services/loginServiceLocator";
import { useAuthContext } from "../../../../../context/authContext";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const { setUser } = useAuthContext();
    const navigate = useNavigate();
    const [visible, setVisible] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleIcon = () => {
        setVisible(!visible);
    };

    async function handleLogin() {
        try {
            const response = await loginServiceLocator.loginUseCase.execute(email, password);
            if (response) {
                setUser(response);
                navigate('/shop');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert("Login failed. Please check your credentials.");
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="loginForm_password">
                    <p>Password</p>
                    <div className="login_input">
                        <input
                            type={visible ? "text" : "password"}
                            placeholder="******"
                            name="password_input"
                            id="password_input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="loginForm_icon_eye" onClick={handleIcon}>
                            {visible ? <IoMdEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                </div>
                <div className="loginForm_btn">
                    <button onClick={handleLogin}>SIGN UP</button>
                </div>
                <LoginFormOr />
                <LoginRedes />
            </div>
        </div>
    );
};
