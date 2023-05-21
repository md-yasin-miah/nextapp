'use client'
import Header from '../shared/header/header';
import d from '../../styles/pages/dashboard/dashboard.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Overview from '@/pages/dashboard/Overview';
import { useRouter } from 'next/navigation';

const DashboardLayout = () => {
  const [activeChildren, setActiveChildren] = useState(0);
  const router = useRouter();
  const setChildren = (children, link) => {
    link ? router.push(link) : setActiveChildren(children);
  }
  const Children = () => {
    switch (activeChildren) {
      case 0:
        return <Overview />
      case 1:
        return <div>downloads</div>
      case 2:
        return <div>myMusic</div>
      case 3:
        return <div>manageSubscription</div>
      case 4:
        return <div>userAccount</div>
      default:
        return <Overview />
    }
  }
  const lists = [
    {
      icon: '/svg/UserCircleOutline.svg',
      title: 'Overview',
    },
    {
      icon: '/svg/DownloadOutline.svg',
      title: 'Downloads',
    },
    {
      icon: '/svg/ic_outline-music-note.svg',
      title: 'My Music',
    },
    {
      icon: '/svg/Mask group.svg',
      title: 'Manage Subscription',
    },
    {
      icon: '/svg/mdi_user-outline.svg',
      title: 'User Account',
    },
    {
      icon: '/svg/LogoutOutline.svg',
      title: 'Log Out',
      link: '/login'
    }
  ]
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
            {
              lists.map((list, index) => (
                <li key={index} className={activeChildren === index && d.active} onClick={() => setChildren(index, list?.link)}>
                  <div className={d.icon}>
                    <Image src={list.icon} width={28} height={28} />
                  </div>
                  <span>{list.title}</span>
                </li>
              ))
            }
          </ul>
          <div className={d.divider}></div>
        </div>
        <div className={d.childrenArea}>
          <Children />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout