import Image from 'next/image';
import styles from '../../styles/pages/dashboard/overview.module.css';
import SubscriptionPlanCard from '@/components/SubscriptionPlanCard';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Overview = () => {
  const user = useSelector(state => state.profile.profile);
  return (
    <div className='dashboard_children'>
      <div className={styles.overviewCards}>
        <div className={styles.card}>
          <div>
            <div className={styles.icon}>
              <Image src="/svg/ic_outline-music-note.svg" width={18} height={18} alt="icon" />
            </div>
            <div className={styles.content}>
              <p className={styles.counter}>{user?.songCount || '00'}</p>
              <p className={styles.name}>Created Songs</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div className={styles.icon}>
              <Image src="/svg/DownloadOutline.svg" width={18} height={18} alt="icon" />
            </div>
            <div className={styles.content}>
              <p className={styles.counter}>{user?.downloadCount || '0'}</p>
              <p className={styles.name}>Downloaded</p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <div className={styles.icon}>
              <Image src="/svg/tag.svg" width={18} height={18} alt="icon" />
            </div>
            <div className={styles.content}>
              <p className={styles.counter}>{user?.sales || '0'}</p>
              <p className={styles.name}>Sale Songs</p>
            </div>
          </div>
        </div>
        <div className={styles.card} style={{ display: 'none' }}>
          <div>
            <div className={styles.icon}>
              <Image src="/svg/grow.svg" width={18} height={18} alt="icon" />
            </div>
            <div className={styles.content}>
              <p className={styles.counter}>${user?.revenue || '0'}</p>
              <p className={styles.name}>Revenue</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_children_title">
        <div className={styles.profileTitle}>
          <h4 className={styles.p_title + ' ' + 'title'}>Profile</h4>
          <Link href='/dashboard/userAccount'>
            <button className='s_btn'>Edit Profile</button>
          </Link>
        </div>
        <div className={styles.profile_info}>
          <div className={styles.p_info}>
            <p className={styles.name}>Email</p>
            <p className={styles.info}>{user?.email || 'N/A'}</p>
          </div>
          <div className={styles.p_info}>
            <p className={styles.name}>Mobile Number</p>
            <p className={styles.info}>{user?.phoneNumber || 'N/A'}</p>
          </div>
          <div className={styles.p_info}>
            <p className={styles.name}>User Name</p>
            <p className={styles.info}>{user?.username || 'N/A'}</p>
          </div>
          <div className={styles.p_info}>
            <p className={styles.name}>Birthday</p>
            <p className={styles.info}>{user?.birthday || 'N/A'}</p>
          </div>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Your Current Plan</h4>
        <SubscriptionPlanCard data={{ selected: true }} />
      </div>
    </div>
  )
}

export default Overview