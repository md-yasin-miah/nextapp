"use client"
import React, { useState } from 'react'
import signUp from '../../styles/pages/auth.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../axios/axios';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);

  const handleRegistration = async () => {
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const userData = {
      fullName,
      email,
      password,
    };

    dispatch(registerUser(userData));
    //verify email
    router.push('/verify');
  };

  return (
    <div>
      <div className={signUp.header_logo}>
        <Link href='/'>
          <Image src="/img/header/logo.png" width={40} height={40} alt='logo' />
        </Link>
      </div>
      <div className={signUp.signUp}>
        <div className="authContainer">
          <div className="loginImgArea">
            <div className="imgBox">
              <div className="bg"></div>
              <Image
                src="/img/signup.png"
                width={445}
                height={485}
                alt=""
              />
            </div>
          </div>
          <div className="formArea">
            <h4>Create Account</h4>
            <div className='form'>
              <div className='formControl'>
                <label htmlFor="text">Full Name</label>
                <input type="text" id="name" placeholder="Enter your full name" />
              </div>
              <div className='formControl'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div className='formControl'>
                <label htmlFor="password">Password</label>
                <input type={showPassword ? "text" : "password"} id="password" placeholder="Type your Password" />
              </div>
              <div className="controlPassword">
                <div className="showPassword">
                  <input onClick={() => setShowPassword(!showPassword)} type="checkbox" id="showPassword" />
                  <label htmlFor="showPassword">Show Password</label>
                </div>
              </div>
              <button className='actionBtn' onClick={handleRegistration}>Create account</button>
              <div className="alternativeLigInOptions">
                <p>Or Sign up with</p>
                <div className="authIcon">
                  <Image
                    src="/img/google.png"
                    width={32}
                    height={32}
                    alt="google"
                  />
                  <Image
                    src="/img/facebook.png"
                    width={32}
                    height={32}
                    alt="facebook"
                  />
                </div>
                <div className='haveAccount'>
                  <p>Already have an account?</p>
                  <Link href="/login" className='login'>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage