import Image from 'next/image';
import header from './../../../styles/pages/header.module.css';

const Header = () => {
  return (
    <header className={header.header_container}>
      <div className={header.header_logo}>
        <Image src="/img/header/logo.png" width={40} height={40} alt='logo' />
      </div>
      <div className={header.header_links}>
        <ul>
          <li className={header.active}>Create</li>
          <li>Stream</li>
          <li>Shop</li>
          <li>Pricing</li>
          <li>Join</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* <div className={header.header_profile}>
        <Image src="/img/header/profile.png" width={40} height={40} alt='profile' />
        <p>Username</p>
      </div> */}
      <div className={header.header_profile}>
        <span className={header.sign_in}>Sign In</span>
        <span className={header.sign_up}>Sign Up</span>
      </div>
    </header>
  )
}

export default Header