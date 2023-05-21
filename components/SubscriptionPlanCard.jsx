import Image from 'next/image'
import React from 'react'

const SubscriptionPlanCard = ({ selected }) => {
  return (
    <div className='subscriptionPlanCard'>
      <div className="subscriptionPlanCard_header">
        <h4>Subscription Plan</h4>
        {!selected && <button><span>Select Plan</span></button>}
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
    </div>
  )
}

export default SubscriptionPlanCard