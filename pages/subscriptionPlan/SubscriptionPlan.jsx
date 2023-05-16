"use client"
import { useState } from 'react';
import s from '../../styles/pages/subscription.module.css';
import Image from 'next/image';

const SubscriptionPlan = () => {
  const [active, setActive] = useState('monthly')
  const Check = () => (
    <Image src="/check.svg" width={24} height={24} alt="check" />
  )
  const Cross = () => (
    <Image src="/crossO.svg" width={24} height={24} alt="cross" />
  )
  return (
    <div>
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
        <div className={s.s_cards}>
          {
            ['1', '2', '3'].map((item, i) => (
              // conditional bg
              <div className={s.s_card + ' ' + (i === 1 ? s.coloredBG : '')}>
                <div className={s.s_card__header}>
                  <h3>Basic</h3>
                </div>
                <div className={s.s_card__body}>
                  <div className={s.s_card__price}>
                    <h1>$50</h1>
                    <span>/per month</span>
                  </div>
                  <div className={s.s_card__features}>
                    <ul>
                      <li><Check /><span>up to 50 users</span></li>
                      <li><Check /><span>Collaboration features</span></li>
                      <li><Check /><span>Smart analytics</span></li>
                      <li><Check /><span>30-day free trail</span></li>
                    </ul>
                  </div>
                  <div className={s.s_card__button + ' ' + (i === 1 ? s.active : '')}>
                    <button>Choose Plan</button>
                  </div>
                </div>
                {/* conditional tsg */}
                {i === 1 && <div className={s.s_popular}><span>Popular</span></div>}
              </div>
            ))
          }
        </div>
      </div>
      <div className={s.c_subscriptionPlan}>
        <div className="pageTitle">
          <h1>Compare Subscription Plan</h1>
        </div>
        <div className={s.s_cards + ' ' + s.s_cards_c}>
          <div className={s.s_card_cf}>
            <div className={s.c_card_feature}>
              <div className={s.s_card__header_c}>
                <h3>Key features</h3>
              </div>
              <div className={s.s_card__features_c}>
                <ul>
                  <li>Create and send invoices</li>
                  <li>Track expenses</li>
                  <li>Unlimited contact</li>
                  <li>Multi - currency</li>
                </ul>
              </div>
            </div>
            <div className={s.c_card_feature}>
              <div className={s.s_card__header_c}>
                <h3>Advanced features</h3>
              </div>
              <div className={s.s_card__features_c}>
                <ul>
                  <li>Create and send invoices</li>
                  <li>Track expenses</li>
                  <li>Unlimited contact</li>
                  <li>Multi - currency</li>
                </ul>
              </div>
            </div>
          </div>
          {
            ['1', '2', '3'].map((item, i) => (
              <div className={s.s_card + ' ' + s.s_card_c + ' ' + (i === 1 ? s.coloredBG : '')}>
                <div className={s.s_card__header}>
                  <h3>Personal</h3>
                </div>
                <div className={s.s_card__body}>
                  <div className={s.s_card__price}>
                    <h1>$50</h1>
                    <span>/per month</span>
                  </div>
                  <div className={s.s_card__button + ' ' + (i === 1 ? s.active : '')}>
                    <button>Choose Plan</button>
                  </div>
                  <div className={s.s_card__features}>
                    <div className={s.s_card__header_c}>
                      <h3>Key features</h3>
                    </div>
                    <ul>
                      <li><span>Create and send invoices</span><Check /></li>
                      <li><span>Track expenses</span><Cross /></li>
                      <li><span>Unlimited contact</span><Check /></li>
                      <li><span>Multi - currency</span><Check /></li>
                    </ul>
                  </div>
                  <div className={s.s_card__features}>
                    <div className={s.s_card__header_c}>
                      <h3>Advanced features</h3>
                    </div>
                    <ul>
                      <li><span>Create and send invoices</span><Check /></li>
                      <li><span>Track expenses</span><Cross /></li>
                      <li><span>Unlimited contact</span><Check /></li>
                      <li><span>Multi - currency</span><Check /></li>
                    </ul>
                  </div>
                </div>
                {/* conditional tsg */}
                {/* {i === 1 && <div className={s.s_popular}><span>Popular</span></div>} */}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPlan