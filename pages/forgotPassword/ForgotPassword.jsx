"use client"
import React, { useState } from 'react'
import forgotPass from '../../styles/pages/auth.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
const ForgotPassword = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className={forgotPass.forgotPass}>
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
          <h4>Forgot Password?</h4>
          <div className='form'>
            <div className={`formControl ${forgotPass.mb_0}`}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <button onClick={() => router.push('/resetPassword')} className='actionBtn'>Reset password</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword