import { useLayoutEffect, useState } from "react";
import { LoginFormOr, LoginRedes } from "..";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { loginServiceLocator } from "../../../../../../Infra/Services/loginServiceLocator";
import { useAuthContext } from "../../../../../Context/authContext";
import { useNavigate } from "react-router-dom";
import { getCredentials } from "../../Cache/getCredentials";
import { setCredentials } from "../../Cache/setCredentials";
import { getCheck } from "../../Cache/getCheck";
import { useTranslation } from "react-i18next";

import './LoginForm.styles.sass'

export const LoginForm = () => {
    const { setUser, loading, setLoading } = useAuthContext();
    const { t } = useTranslation();
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
            <p className="loginForm_title">{t("login.signIn")}</p>
            <div className="loginForm_form">
                <div className="loginForm_email">
                    <p>{t("login.email")}</p>
                    <div className="login_input">
                        <input
                            type="email"
                            placeholder={t("login.emailInput")}
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
                    <p>{t("login.password")}</p>
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
                        <p>{t("login.remember")}</p>
                    </div>
                    <div className="loginForm_forgot">
                        <a>{t("login.forgot")}</a>
                    </div>
                </div>
                <div className="loginfForm_terms">
                    <a 
                        href="/src/assets/pdfs/terms.pdf"
                        target="_blank"
                        id="link_pdf"
                    >
                        {t("login.term")}
                    </a>
                </div>
                {loading ? (
                    <div className="spinner"></div>
                ) : (
                    <div className="loginForm_btn">
                        <button type="submit">{t("login.btn")}</button>
                    </div>
                )}
                <LoginFormOr />
                <LoginRedes />
            </div>
        </form>
    );
};
