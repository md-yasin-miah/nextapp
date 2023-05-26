import MainLayout from '@/components/layouts/MainLayout'
import SubscriptionPlan from '@/pages/subscriptionPlan/SubscriptionPlan'
import React from 'react'
export const metadata = {
  title: 'Subscription Plan',
  description: 'Develop with Next.js, Developed by My Yasin & Ruhul Amin',
}
const Subscription = () => {
  return (
    <MainLayout>
      <div className="container">
        <SubscriptionPlan />
      </div>
    </MainLayout>
  )
}

export default Subscription