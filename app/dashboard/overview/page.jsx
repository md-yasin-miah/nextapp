import DashboardLayout from "@/components/layouts/DashboardLayout"
import Overview from "@/pages/dashboard/Overview"

const overviewPage = () => {
  return (
    <DashboardLayout>
      <Overview />
    </DashboardLayout>
  )
}

export default overviewPage