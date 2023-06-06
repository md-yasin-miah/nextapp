'use client'
import u from '../../styles/pages/dashboard/userAccount.module.css';
import { useState } from 'react';
import { updateProfile } from '../../axios/axios';
import { useDispatch } from 'react-redux';


const UserAccount = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    userName: '',
    phone: ''
  })

  const handleForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    // const userData = {
    //   name: formData.name,
    //   email: formData.email,
    //   userName: formData.userName,
    //   phone: formData.phone
    // }
    await dispatch(updateProfile(formData)); // Use dispatch instead of useDispatch
  }

  return (
    <div className='dashboard_children'>
      <div className="dashboard_children_title">
        <h4 className='title'>Profile</h4>
        <form className='form'>
          <div className={u.inputArea}>
            <div className='formControl'>
              <label htmlFor="name">Full Name</label>
              <input name='fullName' type="text" id="name" onChange={handleForm} />
            </div>
            <div className='formControl'>
              <label htmlFor="email">Email</label>
              <input name="email" type="email" id="email" onChange={handleForm} />
            </div>
            <div className='formControl'>
              <label htmlFor="userName">User Name</label>
              <input name="username" type="text" id="userName" onChange={handleForm} />
            </div>
            <div className='formControl'>
              <label htmlFor="phone">Mobile Number</label>
              <input name="phoneNumber" type="tel" id="phone" onChange={handleForm} />
            </div>
          </div>
          <div className={u.btnArea}>
            <button type='submit' className='s_btn' onClick={handleUpdateProfile}>Update Profile</button>
            <button className='s_btn s_btn_t'>Reset</button>
          </div>
        </form>
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Password</h4>
        <div className={u.subCard}>
          <p>Once I have this information, I can guide you through the process of changing your password</p>
          <button className='s_btn'>Change password</button>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Delete Account</h4>
        <div className={u.subCard}>
          <p>Once I have this information, I can guide you through the process of changing your password</p>
          <button className='s_btn'>Delete Account</button>
        </div>
      </div>
    </div>
  )
}

export default UserAccount