import { useState } from 'react';
import './registerForm.styles.sass'
import { IoMdEye } from 'react-icons/io';
import { FaEyeSlash } from 'react-icons/fa';
import { useAuthContext } from '../../../../../context/authContext';
import { LoginFormOr, LoginRedes } from '..';

export const RegisterForm = () => {
  const { loading } = useAuthContext();
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <form className="registerForm_container">
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
            />
            <div className="registerForm_icon_eye" onClick={() => setVisible((prev) => !prev)}>
              {visible ? <IoMdEye /> : <FaEyeSlash />}
            </div>
          </div>
        </div>
        {loading ? (
          <div className="spinner_register"></div>
        ) : (
          <div className="registerForm_btn">
            <button>SIGN UP</button>
          </div>
        )}
        <LoginFormOr />
        <LoginRedes />
      </div>
    </form>
  )
}
