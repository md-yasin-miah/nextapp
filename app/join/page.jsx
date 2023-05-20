import MainLayout from "@/components/layouts/MainLayout"
import Join from "@/pages/join/Join"

export const metadata = {
  title: 'Join Us',
  description: 'Develop with Next.js, Developed by My Yasin & Ruhul Amin',
}
const joinPage = () => {
  return (
    <MainLayout>
      <Join />
    </MainLayout>
  )
}

export default joinPage