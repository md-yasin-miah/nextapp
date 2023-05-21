import React from 'react';
import Header from '../shared/header/header';
import d from '../../styles/pages/dashboard/dashboard.module.css';
import Link from 'next/link';
import Image from 'next/image';
const DashboardLayout = ({ children }) => {
  return (
    <div className='dashboardLayout'>
      <div className="bgEffect1"></div>
      <div className="bgEffect2"></div>
      <Header />
      <div className={d.dashboardBody}>
        <div className={d.mainArea}>
          <div className={d.profile}></div>
          <ul className={d.lists}>
            <li>
              <Link href='/dashboard/overview'>
                <div className={d.icon}>
                  <Image src='/svg/UserCircleOutline.svg' width={20} height={20} />
                </div>
                <span>Overview</span>
              </Link>
              <Link href='/dashboard/overview'>
                <div className={d.icon}>
                  <Image src='/svg/ic_outline-music-note.svg' width={20} height={20} />
                </div>
                <span>Overview</span>
              </Link>
              <Link href='/dashboard/overview'>
                <div className={d.icon}>
                  <Image src='/svg/Mask group.svg' width={20} height={20} />
                </div>
                <span>Overview</span>
              </Link>
              <Link href='/dashboard/overview'>
                <div className={d.icon}>
                  <Image src='/svg/mdi_user-outline.svg' width={20} height={20} />
                </div>
                <span>Overview</span>
              </Link>
              <Link href='/dashboard/overview'>
                <div className={d.icon}>
                  <Image src='/svg/LogoutOutline.svg' width={20} height={20} />
                </div>
                <span>Overview</span>
              </Link>
              <Link href='/dashboard/overview'>
                <div className={d.icon}>
                  <Image src='/svg/ic_outline-music-note.svg' width={20} height={20} />
                </div>
                <span>Overview</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={d.childrenArea}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout