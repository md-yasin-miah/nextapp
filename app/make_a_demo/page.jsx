import MakeDemo from "@/pages/makeDemo/MakeDemo";
export const metadata = {
  title: 'Create',
  description: 'Develop with Next.js, Developed by My Yasin & Ruhul Amin',
}
export default function createDemo() {
  return (
    <div className="container">
      <MakeDemo />
    </div>
  )
}