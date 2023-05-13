import Image from 'next/image';
import header from './../../../styles/pages/header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={header.header}>
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
          <div className={header.header_profile}>
            <Link href="/login" className={header.sign_in}>Sign In</Link>
            <Link href="/signUp" className={header.sign_up}>Sign Up</Link>
          </div>
        </div>
        {/* <div className={header.header_profile}>
        <Image src="/img/header/profile.png" width={40} height={40} alt='profile' />
        <p>Username</p>
      </div> */}
        <div className={header.bar}>
          <Image src="/img/header/burger.png" width={16.5} height={10.5} alt='bar' />
        </div>
      </header>
    </div>
  )
}

export default Header