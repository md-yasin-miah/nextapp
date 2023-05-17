"use client"
import React, { useState } from 'react'
import reset from '../../styles/pages/auth.module.css'
import Image from 'next/image'
const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className={reset.reset}>
      <div className="authContainer">
        <div className="loginImgArea">
          <div className="imgBox">
            <div className="bg"></div>
            <Image
              src="/img/password.png"
              width={445}
              height={485}
              alt=""
            />
          </div>
        </div>
        <div className="formArea">
          <h4>Create New Password</h4>
          <div className='form'>
            <div className={`formControl ${reset.mb_40}`}>
              <label htmlFor="password">New Password</label>
              <input type={showPassword ? "text" : "password"} id="password" placeholder="Type your Password" />
            </div>
            <div className={`formControl ${reset.mb_16}`}>
              <label htmlFor="password">Confirm Password</label>
              <input type={showPassword ? "text" : "password"} id="password" placeholder="Type your Password" />
            </div>
            <div className="controlPassword">
              <div className="showPassword">
                <input onClick={() => setShowPassword(!showPassword)} type="checkbox" id="showPassword" />
                <label htmlFor="showPassword">Show Password</label>
              </div>
            </div>
            <button className='actionBtn'>Reset password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword