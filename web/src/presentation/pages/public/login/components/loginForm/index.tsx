import { useLayoutEffect, useState } from "react";
import { LoginFormOr, LoginRedes } from "..";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import "./loginForm.styles.sass";
import { loginServiceLocator } from "../../../../../../infra/services/loginServiceLocator";
import { useAuthContext } from "../../../../../context/authContext";
import { useNavigate } from "react-router-dom";
import { getCredentials } from "../../cache/getCredentials";
import { setCredentials } from "../../cache/setCredentials";
import { getCheck } from "../../cache/getCheck";

export const LoginForm = () => {
    const { setUser, loading, setLoading } = useAuthContext();
    const navigate = useNavigate();
    const [visible, setVisible] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [check, setCheck] = useState<boolean>(false);

    async function handleDate() {
        try {
            const response = await getCredentials();
            if (response) {
                setEmail(response.email || '');
                setPassword(response.password || '');
            }
        } catch (error) {
            console.log("Failed to load credentials from cache:", error);
        }
    }

    async function loadCheck() {
        const savedCheck = await getCheck();
        setCheck(savedCheck === 'true');
    }

    useLayoutEffect(() => {
        loadCheck();
        handleDate();
    }, []);

    const handleCache = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            setCredentials(email, password);
        } else {
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userPassword");
        }
        setCheck(isChecked); 
    };

    async function handleLogin() {
        setLoading(true)
        try {
            const response = await loginServiceLocator.loginUseCase.execute({ email, password });
            if (response) {
                setUser(response);
                navigate('/shop');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert("Login failed. Please check your credentials.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form 
            className="loginForm_container"
            onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
            }}
        >
            <p className="loginForm_title">SIGN IN</p>
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
                            required
                            autoComplete="email"
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
                            required
                        />
                        <div className="loginForm_icon_eye" onClick={() => setVisible((prev) => !prev)}>
                            {visible ? <IoMdEye /> : <FaEyeSlash />}
                        </div>
                    </div>
                </div>
                <div className="loginForm_check_box">
                    <div className="loginForm_check">
                        <input 
                            type="checkbox" 
                            name="check_login" 
                            id="check_login" 
                            checked={check}
                            onChange={(e) => {
                                setCheck(e.target.checked);
                                handleCache(e);
                            }}
                        />
                        <p>Remember me</p>
                    </div>
                    <div className="loginForm_forgot">
                        <a>Forgot password?</a>
                    </div>
                </div>
                {loading ? (
                    <div className="spinner"></div>
                ) : (
                    <div className="loginForm_btn">
                        <button type="submit">SIGN IN</button>
                    </div>
                )}
                <LoginFormOr />
                <LoginRedes />
            </div>
        </form>
    );
};
