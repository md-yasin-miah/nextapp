"use client"
import React, { useState } from 'react'
import signUp from '../../styles/pages/auth.module.css'
import Image from 'next/image'
import Link from 'next/link'
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className={signUp.signUp}>
      <div className="authContainer">
        <div className="loginImgArea">
          <div className="imgBox">
            <div className="bg"></div>
            <Image
              src="/../public/img/signup.png"
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
              <input type="email" id="email" placeholder="Enter your full name" />
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
            <button className='actionBtn'>Create account</button>
            <div className="alternativeLigInOptions">
              <p>Or Sign up with</p>
              <div className="authIcon">
                <Image
                  src="/../public/img/google.png"
                  width={32}
                  height={32}
                  alt="google"
                />
                <Image
                  src="/../public/img/facebook.png"
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
  )
}

export default SignUpPage