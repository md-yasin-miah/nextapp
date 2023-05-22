import u from '../../styles/pages/dashboard/userAccount.module.css';

const UserAccount = () => {
  return (
    <div className='dashboard_children'>
      <div className="dashboard_children_title">
        <h4 className='title'>Profile</h4>
        <form className='form'>
          <div className={u.inputArea}>
            <div className='formControl'>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" />
            </div>
            <div className='formControl'>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className='formControl'>
              <label htmlFor="userName">User Name</label>
              <input type="text" id="userName" />
            </div>
            <div className='formControl'>
              <label htmlFor="phone">Mobile Number</label>
              <input type="tel" id="phone" />
            </div>
          </div>
          <div className={u.btnArea}>
            <button className='s_btn'>Update Profile</button>
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