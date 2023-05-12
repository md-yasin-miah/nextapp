import MainLayout from "../../components/layouts/MainLayout";
import CreateMusic from "./createMusic/createMusic";
import GetStarted from "./getStarted/getStarted";
import MakeDemo from "./makeDemo/makeDemo";
import Shop from "./shop/shop";
import Stream from "./stream/stream";

export default function HomePage() {
  return (
    <MainLayout>
        <MakeDemo />
        <CreateMusic />
        <Stream />
        <Shop />
        <GetStarted />
    </MainLayout>
  )
}