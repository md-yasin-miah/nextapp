import MainLayout from '@/components/layouts/MainLayout';
import ContactUs from '@/pages/contactUs/ContactUs';
export const metadata = {
  title: 'Contact Us',
  description: 'Develop with Next.js, Developed by My Yasin & Ruhul Amin',
}
const contact = () => {
  return (
    <MainLayout>
      <div className="container">
        <ContactUs />
      </div>
    </MainLayout>
  )
}

export default contact