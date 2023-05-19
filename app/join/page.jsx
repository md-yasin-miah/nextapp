import JoinPage from "@/pages/joinPage/joinPage"
import MainLayout from "@/components/layouts/MainLayout";
export const metadata = {
  title: 'Join',
  description: 'Develop with Next.js, Developed by My Yasin & Ruhul Amin',
}
export default function Join() {
  return (
    <MainLayout>
      <JoinPage />
    </MainLayout>
  )
}
