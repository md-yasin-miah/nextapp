"use client"
import Image from 'next/image'
import login from '../../styles/pages/auth.module.css'
import { useState } from 'react'
import Link from 'next/link'
export default function LogInPage() {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className={login.login}>
      <div className="authContainer">
        <div className="loginImgArea">
          <div className="imgBox">
            <div className="bg"></div>
            <Image
              src="/img/login.png"
              width={445}
              height={485}
              alt=""
            />
          </div>
        </div>
        <div className="formArea">
          <h4>Login your Account</h4>
          <div className='form'>
            <div className='formControl'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className='formControl'>
              <label htmlFor="password">Password</label>
              <input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" />
            </div>
            <div className="controlPassword">
              <div className="showPassword">
                <input onClick={() => setShowPassword(!showPassword)} type="checkbox" id="showPassword" />
                <label htmlFor="showPassword">Show Password</label>
              </div>
              <Link href="/forgotPassword" className="forgotPassword">Forgot Password?</Link>
            </div>
            <button className='actionBtn'>Login</button>
            <div className="alternativeLigInOptions">
              <p>Or login with</p>
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
                <p>Don’t  have an account?</p>
                <Link href="/signUp" className='signUp'>Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}