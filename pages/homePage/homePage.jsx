import MainLayout from "../../components/layouts/MainLayout";
import CreateMusic from "./createMusic/createMusic";
import GetStarted from "./getStarted/getStarted";
import Shop from "./shop/shop";
import Stream from "./stream/stream";
import HeroSection from "./heroSection/heroSection";

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <CreateMusic />
      <Stream />
      <Shop />
      <GetStarted />
    </MainLayout>
  )
}