import './Login.css';

import React, { useRef } from 'react';

import { useAuth } from '../context/authContext';

const Login = () => {
  const { login } = useAuth();
  const inputRef = useRef(null);
  return (
    <div className="Login">
      <div className="head">
        <h1>GIPHY</h1>
        <h2>Be animated</h2>
      </div>
      <div className="login-form">
        <input type="text" placeholder="Your name" ref={inputRef} />
        <button
          onClick={() => {
            login(inputRef.current.value);
          }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Login;
