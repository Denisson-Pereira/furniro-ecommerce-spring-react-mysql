import { useState } from 'react';
import './registerForm.styles.sass'
import { IoMdEye } from 'react-icons/io';
import { FaEyeSlash } from 'react-icons/fa';
import { useAuthContext } from '../../../../../context/authContext';
import { LoginFormOr, LoginRedes } from '..';
import { registerServiceLocator } from '../../../../../../infra/services/registerServiceLocator';
import { passwordValidation } from '../../../../../../shared/validations/passwordValidation';

export const RegisterForm = () => {
  const { loading, setLoading } = useAuthContext();
  const [visible, setVisible] = useState<boolean>(false);

  const [first_name, setFirst_name] = useState<string>('')
  const [last_name, setLast_name] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function handleRegister() {
    setLoading(true);
    try {
      const respose = await registerServiceLocator.regsterUseCase.execute({ first_name, last_name, email, password });
      if (respose) {
        alert("User created successfully!");
        location.reload();
      }
    } catch (error) {
      console.error('Sign up failed:', error);
      alert("Sign up. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="registerForm_container"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister();
      }}
    >
      <p className='registerForm_title'>SIGN UP</p>
      <div className="registerForm_form">
        <div className="loginForm_name">
          <div className="loginForm_first">
            <p>First Name</p>
            <div className="register_input_name">
              <input
                type="text"
                placeholder='Name Here'
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
            <p>Last Name</p>
            <div className="register_input_name">
              <input
                type="text"
                placeholder='Last Name'
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
          <p>Email</p>
          <div className="register_input">
            <input
              type="email"
              placeholder="Enter Your Email"
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
          <p>Password</p>
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
            <button type='submit'>SIGN UP</button>
          </div>
        )}
        <LoginFormOr />
        <LoginRedes />
      </div>
    </form>
  )
}
