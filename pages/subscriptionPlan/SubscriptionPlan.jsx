"use client"
import { useState } from 'react';
import s from '../../styles/pages/subscription.module.css';

const SubscriptionPlan = () => {
  const [active, setActive] = useState('monthly')
  return (
    <div className={s.subscriptionPlan}>
      <div className="pageTitle">
        <h1>Subscription Plan</h1>
      </div>
      <div className={s.package}>
        <div className={s.box}>
          <div
            onClick={() => setActive('monthly')}
            className={s.monthly + ' ' + (active === 'monthly' && s.active)}>
            <span>Monthly</span>
          </div>
          <div
            onClick={() => setActive('yearly')}
            className={s.yearly + ' ' + (active === 'yearly' && s.active)}>
            <span>Yearly</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPlan