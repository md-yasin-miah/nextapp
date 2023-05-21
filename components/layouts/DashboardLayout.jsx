'use client'
import Header from '../shared/header/header';
import d from '../../styles/pages/dashboard/dashboard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Overview from '@/pages/dashboard/Overview';
const DashboardLayout = () => {
  const [activeChildren, setActiveChildren] = useState('overview');
  const setChildren = (children) => {
    setActiveChildren(children)
  }
  const Children = () => {
    switch (activeChildren) {
      case 'overview':
        return <Overview />
      case 'downloads':
        return <div>downloads</div>
      case 'myMusic':
        return <div>myMusic</div>
      case 'manageSubscription':
        return <div>manageSubscription</div>
      case 'userAccount':
        return <div>userAccount</div>
      default:
        return <Overview />
    }
  }

  return (
    <div className='dashboardLayout'>
      <div className="bgEffect1"></div>
      <div className="bgEffect2"></div>
      <Header />
      <div className={d.dashboardBody}>
        <div className={d.mainArea}>
          <div className={d.profile}>
            <div className={d.imgArea}>
              <div className={d.profileImage}>
                <Image src='/img/header/profile.png' width={120} height={120} alt='profile' />
              </div>
              <div className={d.edit}>
                <Image src='/svg/Plus.svg' width={20} height={20} alt='edit' />
              </div>
            </div>
            <h4>Md. Yasin Miah</h4>
          </div>
          <ul className={d.lists}>
            <li className={d.active} onClick={() => setChildren('overview')}>
              <div className={d.icon}>
                <Image src='/svg/UserCircleOutline.svg' width={28} height={28} />
              </div>
              <span>Overview</span>
            </li>
            <li onClick={() => setChildren('downloads')}>
              <div className={d.icon}>
                <Image src='/svg/DownloadOutline.svg' width={24} height={24} />
              </div>
              <span>Downloads</span>
            </li>
            <li onClick={() => setChildren('myMusic')}>
              <div className={d.icon}>
                <Image src='/svg/ic_outline-music-note.svg' width={28} height={28} />
              </div>
              <span>My Music</span>
            </li>
            <li onClick={() => setChildren('manageSubscription')}>
              <div className={d.icon}>
                <Image src='/svg/Mask group.svg' width={28} height={28} />
              </div>
              <span>Manage Subscription</span>
            </li>
            <li onClick={() => setChildren('userAccount')}>
              <div className={d.icon}>
                <Image src='/svg/mdi_user-outline.svg' width={28} height={28} />
              </div>
              <span>User Account</span>
            </li>
            <li>
              <div className={d.icon}>
                <Image src='/svg/LogoutOutline.svg' width={28} height={28} />
              </div>
              <span>Log Out</span>
            </li>
          </ul>
        </div>
        <div className={d.childrenArea}>
          <Children />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout