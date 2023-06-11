'use client'
import React, { useEffect, useState } from 'react'
import SubscriptionPlanCard from '@/components/SubscriptionPlanCard';
import styles from '../../styles/pages/subscription.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { NoDataFound } from '@/components/helper';
import { cancelSubscription, getAllPlans } from '@/axios/axios';

const ManageSubscription = () => {
  const [selectedPlan, setSelectedPlan] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.profile);
  const { plans } = useSelector(state => state.plan);
  const subscription = user?.subscription;

  const handleCancelSubscription = () => {
    dispatch(cancelSubscription());
  }

  const convertDate = (date) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const day = d.getDate();
    const year = d.getFullYear();
    //formate 06 April, 2023
    return `${day} ${month}, ${year}`;
  }
  useEffect(() => {
    !plans && dispatch(getAllPlans());
    //find my selected plan
    const myPlan = plans?.find(plan => plan.annualPricingId || plan.monthlyPricingId === subscription?.priceId);
    setSelectedPlan(myPlan);
  }, [plans, subscription])

  return (
    <div className='dashboard_children'>
      <div className="dashboard_children_title">
        <h4 className='title'>Your Subscription Plan</h4>
        <SubscriptionPlanCard selected={true} data={selectedPlan} />
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Purchases</h4>
        <div className={styles.subCard}>
          <div className={styles.p_info}>
            <span className={styles.name}>Recurring Purchases</span>
            <span className={styles.time}>1 year 2month</span>
          </div>
          <button className='s_btn' onClick={handleCancelSubscription}>Cancel Subscription</button>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Device Management</h4>
        <div className={styles.subCard}>
          <div className={styles.p_info}>
            <span className={styles.name}>No of Device</span>
            <span className={styles.management_count}>3</span>
          </div>
          <span className={styles.textBtn}>Manage</span>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Subscription History</h4>
        <div className={styles.subCard + ' ' + styles.subscriptionHistory}>
          <div className={styles.p_info + ' ' + styles.history}>
            <span>Billing Issue</span>
            <small>{convertDate(subscription?.billingDate)}</small>
          </div>
          <div className={styles.p_info + ' ' + styles.history}>
            <span>Ending Date</span>
            <small>{convertDate(subscription?.endDate)}</small>
          </div>
        </div>
      </div>
      <div className="dashboard_children_title">
        <h4 className='title'>Subscription Plan</h4>
        {plans?.length > 0 ?
          plans?.map((data, i) => (
            <SubscriptionPlanCard data={data} selected={false} key={i} />
          ))
          : <NoDataFound width={250} height={250} />
        }
      </div>
    </div>
  )
}

export default ManageSubscription