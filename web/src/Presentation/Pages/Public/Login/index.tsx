import { useState } from 'react'
import { ImageLogin, LoginForm, RegisterForm } from './Components'
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Logo from '../../../../Assets/Images/logo.png'

import './login.styles.sass'

export const Login = () => {
  const [login, setLogin] = useState<boolean>(true);

  const changeForm = () => {
    console.log('changeForm');
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  }

  return (
    <div className="login_container">
      <div className="login_left">
        <ImageLogin />
      </div>
      <div className="login_right">
        <div className="login_form">
          <div className="login_form_img">
            <img src={Logo} alt="logo" />
            <p>Furniro</p>
          </div>
          <div className="login_form_container2">
            <div className="login_form_container3">
              <div className="login_form_cond">
                {login ? <LoginForm /> : <RegisterForm />}
              </div>
              <div className="login_form_reg">
                <p>{login ? 'No account yet?' : 'Already a user?'}</p>
                <button onClick={changeForm}>{login ? 'SIGN UP' : 'SIGN IN'}</button>
              </div>
            </div>
          </div>
          <div className="login_form_contact">
            <div className="login_form_email">
              <FaSquarePhone />
              <p>(079) 9 5247 - 45787</p>
            </div>
            <div className="login_form_email">
              <MdEmail />
              <p>denisson.pereira753@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
