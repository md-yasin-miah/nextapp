"use client"
import { useEffect, useState } from 'react';
import styles from '../../styles/pages/subscription.module.css';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlans, subscribeToPlan } from '@/axios/axios';
import Loading from '@/components/shared/Loading';

const SubscriptionPlan = () => {
  const [active, setActive] = useState('month')
  const dispatch = useDispatch()
  const { plans, loading, planLoading } = useSelector(state => state.plan);
  const handleSubscribe = (priceId) => {
    dispatch(subscribeToPlan(priceId));
  }
  const Check = () => (
    <Image src="/check.svg" width={24} height={24} alt="check" />
  )
  const Cross = () => (
    <Image src="/crossO.svg" width={24} height={24} alt="cross" />
  )
  useEffect(() => {
    dispatch(getAllPlans())
  }, [])
  return (
    <div>
      <div className={styles.subscriptionPlan}>
        <div className="pageTitle">
          <h1>Subscription Plan</h1>
        </div>
        <div className={styles.package}>
          <div className={styles.box}>
            <div
              onClick={() => setActive('month')}
              className={styles.monthly + ' ' + (active === 'month' && styles.active)}>
              <span>Monthly</span>
            </div>
            <div
              onClick={() => setActive('year')}
              className={styles.yearly + ' ' + (active === 'year' && styles.active)}>
              <span>Yearly</span>
            </div>
          </div>
        </div>
        {
          loading && <Loading width={'100px'} height={'100px'} />
        }
        <div className={styles.s_cards}>
          {
            plans?.map((item, i) => (
              // conditional bg
              <div className={styles.s_card + ' ' + (i === 1 ? styles.coloredBG : '')} key={i}>
                <div className={styles.s_card__header}>
                  <h3>{item?.title}</h3>
                </div>
                <div className={styles.s_card__body}>
                  <div className={styles.s_card__price}>
                    <h1>${active === 'month' ? item?.monthlyPricing : item?.annualPricing
                    }</h1>
                    <span>/per {active}</span>
                  </div>
                  <div className={styles.s_card__features}>
                    <ul>
                      {
                        item?.features?.map((feature, i) => (
                          <li key={i}>
                            {feature?.isAvailable ? <Check /> : <Cross />}
                            <span>{feature?.name}</span>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                  <div className={styles.s_card__button + ' ' + (i === 1 ? styles.active : '')}>
                    <button
                      disabled={planLoading}
                      onClick={() => handleSubscribe(active === 'month' ? item?.monthlyPricingId : item?.annualPricingId)}>Choose Plan</button>
                  </div>
                </div>
                {/* conditional tsg */}
                {i === 1 && <div className={styles.s_popular}><span>Popular</span></div>}
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.c_subscriptionPlan}>
        <div className="pageTitle">
          <h1>Compare Subscription Plan</h1>
        </div>
        <div className={styles.s_cards + ' ' + styles.s_cards_c}>
          <div className={styles.s_card_cf}>
            <div className={styles.c_card_feature}>
              <div className={styles.s_card__header_c}>
                <h3>Key features</h3>
              </div>
              <div className={styles.s_card__features_c}>
                <ul>
                  <li>Create and send invoices</li>
                  <li>Track expenses</li>
                  <li>Unlimited contact</li>
                  <li>Multi - currency</li>
                </ul>
              </div>
            </div>
            <div className={styles.c_card_feature}>
              <div className={styles.s_card__header_c}>
                <h3>Advanced features</h3>
              </div>
              <div className={styles.s_card__features_c}>
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
              <div key={i} className={styles.s_card + ' ' + styles.s_card_c + ' ' + (i === 1 ? styles.coloredBG : '')}>
                <div className={styles.s_card__header}>
                  <h3>Personal</h3>
                </div>
                <div className={styles.s_card__body}>
                  <div className={styles.s_card__price}>
                    <h1>$50</h1>
                    <span>/per month</span>
                  </div>
                  <div className={styles.s_card__button + ' ' + (i === 1 ? styles.active : '')}>
                    <button>Choose Plan</button>
                  </div>
                  <div className={styles.s_card__features}>
                    <div className={styles.s_card__header_c}>
                      <h3>Key features</h3>
                    </div>
                    <ul>
                      <li><span>Create and send invoices</span><Check /></li>
                      <li><span>Track expenses</span><Cross /></li>
                      <li><span>Unlimited contact</span><Check /></li>
                      <li><span>Multi - currency</span><Check /></li>
                    </ul>
                  </div>
                  <div className={styles.s_card__features}>
                    <div className={styles.s_card__header_c}>
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
                {/* {i === 1 && <div className={styles.s_popular}><span>Popular</span></div>} */}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPlan