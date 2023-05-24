import Image from 'next/image';
import o from '../../styles/pages/dashboard/overview.module.css';
import SubscriptionPlanCard from '@/components/SubscriptionPlanCard';
const Overview = () => {
  return (
    <div className='dashboard_children'>
      <div className={o.overviewCards}>
        <div className={o.card}>
          <div>
            <div className={o.icon}>
              <Image src="/svg/ic_outline-music-note.svg" width={18} height={18} alt="icon" />
            </div>
            <div className={o.content}>
              <p className={o.counter}>12</p>
              <p className={o.name}>Created Songs</p>
            </div>
          </div>
        </div>
        <div className={o.card}>
          <div>
            <div className={o.icon}>
              <Image src="/svg/DownloadOutline.svg" width={18} height={18} alt="icon" />
            </div>
            <div className={o.content}>
              <p className={o.counter}>32</p>
              <p className={o.name}>Downloaded</p>
            </div>
          </div>
        </div>
        <div className={o.card}>
          <div>
            <div className={o.icon}>
              <Image src="/svg/tag.svg" width={18} height={18} alt="icon" />
            </div>
            <div className={o.content}>
              <p className={o.counter}>09</p>
              <p className={o.name}>Sale Songs</p>
            </div>
          </div>
        </div>
        <div className={o.card} style={{ display: 'none' }}>
          <div>
            <div className={o.icon}>
              <Image src="/svg/grow.svg" width={18} height={18} alt="icon" />
            </div>
            <div className={o.content}>
              <p className={o.counter}>$56</p>
              <p className={o.name}>Revenue</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard_children_title">
        <div className={o.profileTitle}>
          <h4 className={o.p_title + ' ' + 'title'}>Profile</h4>
          <button className='s_btn'>Edit Profile</button>
        </div>
        <div className={o.profile_info}>
          <div className={o.p_info}>
            <p className={o.name}>Email</p>
            <p className={o.info}>bill.sanders@example.com</p>
          </div>
          <div className={o.p_info}>
            <p className={o.name}>Mobile Number</p>
            <p className={o.info}>244-1139-006</p>
          </div>
          <div className={o.p_info}>
            <p className={o.name}>User Name</p>
            <p className={o.info}>Lannister25</p>
          </div>
          <div className={o.p_info}>
            <p className={o.name}>Birthday</p>
            <p className={o.info}>August 30, 1996</p>
          </div>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Your Current Plan</h4>
        <SubscriptionPlanCard />
      </div>
    </div>
  )
}

export default Overview