import Image from 'next/image';
import headerStyle from './../../../styles/pages/header.module.css';

const Header = () => {
  return (
    <header className={headerStyle.header_container}>
      <div className={headerStyle.header_logo}>
        <Image src="/img/header/circle.png" width={40} height={40} alt='logo' />
      </div>
      <div className={headerStyle.header_links}>
        <ul>
          <li>Create</li>
          <li>Stream</li>
          <li>Shop</li>
          <li>Pricing</li>
          <li>Join</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* <div className={headerStyle.header_profile}>
        <Image src="/img/header/profile.png" width={40} height={40} alt='profile' />
        <p>Username</p>
      </div> */}
      <div className={headerStyle.header_profile}>
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  )
}

export default Header