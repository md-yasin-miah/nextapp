import MainLayout from "../../components/layouts/MainLayout";
import CreateMusic from "./createMusic/createMusic";
import GetStarted from "./getStarted/getStarted";
import Shop from "./shop/shop";
import Stream from "./stream/stream";

export default function HomePage() {
  return (
    <MainLayout>
      <CreateMusic />
      <Stream />
      <Shop />
      <GetStarted />
    </MainLayout>
  )
}