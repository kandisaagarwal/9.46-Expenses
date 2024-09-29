import React from 'react';
import './LoginRegister.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";


const LoginRegister = () => {
  return (
    <div className='wrapper'>
        <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'></FaUser>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required/>
                    <FaLock className='icon'></FaLock>
                </div>

                <div className='remember-forgot'>
                    <label>
                        <input type='checkbox'/>
                        Remember me
                    </label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>New user?<a href="#"> Click here to Sign up </a></p>
                </div>
            </form>
        </div>

        <div className="form-cox register">
            <form action="">
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required/>
                    <FaUser className='icon'/>
                </div> 
                <div className='input-box'>
                    <input type="email" placeholder='email' required/>
                    <FaEnvelope className='icon'></FaEnvelope>
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required/>
                    <FaLock className='icon'></FaLock>
                </div>

                <div className='remember-forgot'>
                    <label>
                        <input type='checkbox'/>
                         I agree to the terms & conditions
                    </label>
                </div>
                <button type='submit'>Login</button>

                <div className='register-link'>
                    <p>Already have an account?<a href="#"> Login </a></p>
                </div>
            </form>
        </div>
    </div>
  );
};

export default LoginRegister