import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SubscriptionPlanCard = ({ data }) => {
  return (
    <div className='subscriptionPlanCard'>
      <div className="subscriptionPlanCard_header">
        <h4>Subscription Plan</h4>
        {data?.selected ?
          <button className='plan_btn'><span>Change Plan</span></button>
          :
          <Link href='/pricing'><button className='plan_btn'><span>Select Plan</span></button></Link>
        }
      </div>
      <div className="subscriptionPlanCard_feature">
        <div className="featuresItems">
          {
            [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div key={index} className="featuresItem">
                <div className="checkIcon">
                  <Image width={22} height={22} src="/check.svg" alt="" />
                </div>
                <span>Collaboration features</span>
              </div>
            ))
          }
        </div>
      </div>
      {/* for mobile version */}
      {data?.selected ?
        <button className='plan_btn sm_plan_btn'><span>Change Plan</span></button>
        :
        <Link href='/pricing'><button className='plan_btn sm_plan_btn'><span>Select Plan</span></button></Link>
      }
    </div>
  )
}

export default SubscriptionPlanCard