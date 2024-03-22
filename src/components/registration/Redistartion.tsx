// import React from "react"
import "./Registartion.css";
// import {supabase} from '../../lib/helper/supabaseClient';

// function Registration() {

//   const login = async() => {
//     await supabase.auth.signIn({

//     })
//   }

//   return (
//     <div className='container'>
//       <button>Login with GitHub</button>
//     </div>
//   );
// }

// export default Registration;

import React, { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

function Registration() {
  const [isLoginVisible, setLoginVisible] = useState(true);

  const toggleLogin = () => {
    setLoginVisible(!isLoginVisible);
  };

  return (
    <div className="container">
      <div className="loginPage">
        <div className="coverOfLogin">
          <span className="loginForm" tabIndex={0} onClick={toggleLogin}>
            Войти
          </span>
          <span>|</span>
          <span className="registrationForm" tabIndex={0} onClick={toggleLogin}>
            Регистрация
          </span>
        </div>
        {isLoginVisible ? <Login /> : <RegistrationForm />}
      </div>
    </div>
  );
}

function RegistrationForm() {
  return (
    <div>
      <div className="regInputs">
        <h2>Форма Для Регистрации</h2>
        <input type="Name" placeholder="Name" />
        <input type="Surname" placeholder="surname" />
        <input type="gmail" placeholder="Gmail" />
        <input type="telephone" placeholder="Number" />
        <input type="password" placeholder="Password" />
        <button type="submit">Регистрация</button>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div>
      <div className="logInputs">
        <input type="gmail" placeholder="Gmail" />
        <input type="password" placeholder="Password" />
        <div className="across">
          <hr />
          <p>Войти Через</p>
          <hr />
        </div>
        <div className="variants">
          <FaFacebook size={35} />
          <FaGoogle size={35} />
        </div>
        <button type="submit">Войти</button>
      </div>
    </div>
  );
}

export default Registration;
