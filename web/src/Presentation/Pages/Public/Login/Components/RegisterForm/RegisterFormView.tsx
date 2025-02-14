import { IoMdEye } from 'react-icons/io';
import { FaEyeSlash } from 'react-icons/fa';
import { LoginFormOr, LoginRedes } from '..';
import { passwordValidation } from '../../../../../../Shared/Validations';
import { IRegisterFormProps } from './IRegisterFormProps';

import './RegisterFormStyles.sass'

export const RegisterFormView = ({ handleRegister, first_name, setFirst_name, last_name, setLast_name, email, setEmail, visible, password, setPassword, setVisible, loading, t } : IRegisterFormProps) => {

  return (
    <form
      className="registerForm_container"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}
    >
      <p className='registerForm_title'>{t("signUp.signUp")}</p>
      <div className="registerForm_form">
        <div className="loginForm_name">
          <div className="loginForm_first">
            <p>{t("signUp.first")}</p>
            <div className="register_input_name">
              <input
                type="text"
                placeholder={t("signUp.inputName")}
                name='first_name'
                id='first_name'
                value={first_name}
                autoComplete='additional-name'
                onChange={(e) => setFirst_name(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="loginForm_first">
            <p>{t("signUp.last")}</p>
            <div className="register_input_name">
              <input
                type="text"
                placeholder={t("signUp.inputLast")}
                name='last_name'
                id='last_name'
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className="registerForm_email">
          <p>{t("signUp.email")}</p>
          <div className="register_input">
            <input
              type="email"
              placeholder={t("signUp.emailInput")}
              name="email_register_input"
              id="email_register_input"
              autoComplete='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="registerForm_email">
          <p>{t("signUp.password")}</p>
          <div className="register_input">
            <input
              type={visible ? "text" : "password"}
              placeholder="******"
              name="password_register_input"
              id="password_register_input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="registerForm_icon_eye" onClick={() => setVisible((prev) => !prev)}>
              {visible ? <IoMdEye /> : <FaEyeSlash />}
            </div>
          </div>
          <div className="registerForm_validate">
            {passwordValidation(password) === "" && (
              <div className="registerForm_validate_default"></div>
            )}
            {passwordValidation(password) === "Weak" && (
              <div className="registerForm_validate_weak"></div>
            )}
            {passwordValidation(password) === "Normal" && (
              <div className="registerForm_validate_normal"></div>
            )}
            {passwordValidation(password) === "Strong" && (
              <div className="registerForm_validate_strong"></div>
            )}
          </div>
        </div>
        {loading ? (
          <div className="spinner_register"></div>
        ) : (
          <div className="registerForm_btn">
            <button type='submit'>{t("signUp.btn")}</button>
          </div>
        )}
        <LoginFormOr />
        <LoginRedes />
      </div>
    </form>
  )
}
