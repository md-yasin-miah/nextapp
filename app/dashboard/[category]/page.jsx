'use client'
import DashboardLayout from '@/components/layouts/DashboardLayout'
import { useParams } from 'next/navigation'

const dashboardPage = () => {
  const router = useParams()
  console.log('router.query', router)
  return (
    <DashboardLayout />
  )
}

export default dashboardPage