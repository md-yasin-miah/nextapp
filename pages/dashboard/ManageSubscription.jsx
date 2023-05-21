import React from 'react'
import SubscriptionPlanCard from '@/components/SubscriptionPlanCard';
import s from '../../styles/pages/subscription.module.css';

const ManageSubscription = () => {
  return (
    <div className='dashboard_children'>
      <div className="dashboard_children_title">
        <h4 className='title'>Your Subscription Plan</h4>
        <SubscriptionPlanCard selected={true} />
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Purchases</h4>
        <div className={s.subCard}>
          <div className={s.p_info}>
            <span>Recurring Purchases</span>
            <span>1 year 2month</span>
          </div>
          <button>Cancel Subscription</button>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Device Management</h4>
        <div className={s.subCard}>
          <div className={s.p_info}>
            <span>No of Device</span>
            <span className={s.management_count}>3</span>
          </div>
          <span className={s.textBtn}>Manage</span>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Subscription History</h4>
        <div className={s.subCard + ' ' + s.subscriptionHistory}>
          <div className={s.p_info + ' ' + s.history}>
            <span>Billing Issue</span>
            <small>06 April, 2023</small>
          </div>
          <div className={s.p_info + ' ' + s.history}>
            <span>Billing Issue</span>
            <small>06 April, 2023</small>
          </div>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Subscription Plan</h4>
        <SubscriptionPlanCard />
        <SubscriptionPlanCard />
      </div>
    </div>
  )
}

export default ManageSubscription