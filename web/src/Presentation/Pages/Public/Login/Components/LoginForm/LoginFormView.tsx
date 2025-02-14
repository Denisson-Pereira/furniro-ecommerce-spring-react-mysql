import { LoginFormOr, LoginRedes } from "..";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { ILoginFormViewProps } from "./ILoginFormProps";

import './LoginFormStyles.sass'

export const LoginFormView = ({ t, email, setEmail, handleLogin, visible, password, setPassword, check, setCheck, handleCache, setVisible, loading }: ILoginFormViewProps) => {

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
                        <button type="submit" data-testid="login-button" >{t("login.btn")}</button>
                    </div>
                )}
                <LoginFormOr />
                <LoginRedes />
            </div>
        </form>
    );
};
