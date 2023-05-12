import Image from 'next/image';
import header from './../../../styles/pages/header.module.css';

const Header = () => {
  return (
    <header className={header.header_container}>
      <div className={header.header_logo}>
        <Image src="/img/header/circle.png" width={40} height={40} alt='logo' />
      </div>
      <div className={header.header_links}>
        <ul>
          <li>Create</li>
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
        <button>Sign In</button>
        <button>Sign Up</button>
      </div>
    </header>
  )
}

export default Header