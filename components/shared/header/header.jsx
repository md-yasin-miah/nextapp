'use client'
import Image from 'next/image';
import header from './../../../styles/pages/header.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const [activeMobNav, setActiveMobNav] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const lists = [
    {
      icon: '/svg/UserCircleOutline.svg',
      title: 'Overview',
      path: '/dashboard/overview'
    },
    {
      icon: '/svg/DownloadOutline.svg',
      title: 'Downloads',
      path: '/dashboard/downloads'
    },
    {
      icon: '/svg/ic_outline-music-note.svg',
      title: 'My Music',
      path: '/dashboard/myMusic'
    },
    {
      icon: '/svg/Mask group.svg',
      title: 'Manage Subscription',
      path: '/dashboard/manageSubscription'
    },
    {
      icon: '/svg/mdi_user-outline.svg',
      title: 'User Account',
      path: '/dashboard/userAccount'
    },
    {
      icon: '/svg/LogoutOutline.svg',
      title: 'Log Out',
      path: '/login'
    }
  ]
  return (
    <div className={header.header}>
      <div className="container">
        <header className={header.header_container}>
          <div className={header.header_logo}>
            <Link href={isLogin ? '/dashboard/overview' : '/'}>
              <Image src="/img/header/logo.png" width={40} height={40} alt='logo' />
            </Link>
          </div>
          <div className={header.header_links} style={activeMobNav ? { display: 'flex' } : { opacity: 1 }}>
            <ul>
              <li className={header.active}><Link href="/make_a_demo" >Create</Link></li>
              <li><Link href="#" >Stream</Link></li>
              <li><Link href="#" >Shop</Link></li>
              <li><Link href="/subscriptionPlan" >Pricing</Link></li>
              <li><Link href="/join" >Join</Link></li>
              <li><Link href="/contact" >Contact</Link></li>
            </ul>
            {isLogin ?
              <div className={header.profile}>
                <div className={header.header_profile + ' ' + header.header_profile_logo} onClick={() => setActiveMobNav(!activeMobNav)}>
                  <Image src="/img/header/profile.png" width={40} height={40} alt='profile' />
                  <p>Username</p>
                </div>
                {activeMobNav && <div className={header.profile_links}>
                  <ul>
                    {
                      lists.map((list, index) => (
                        <Link href={list.path}>
                          <li key={index}>
                            <div>
                              <Image src={list.icon} width={28} height={28} alt='icon' />
                            </div>
                            <span>{list.title}</span>
                          </li>
                        </Link>
                      ))
                    }
                  </ul>
                </div>}
              </div>
              :
              <div className={header.header_profile}>
                <Link href="/login" className={header.sign_in}>Sign In</Link>
                <Link href="/signUp" className={header.sign_up}>Sign Up</Link>
              </div>}
          </div>
          <div className={header.bar} onClick={() => setActiveMobNav(!activeMobNav)}>
            <Image src="/img/header/burger.png" width={16.5} height={10.5} alt='bar' />
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header