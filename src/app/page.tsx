import Features from "@/components/Features";
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Presale from "@/components/Presale"
import TempusFugit from "@/components/TempusFugit"
import BuyEarn from "@/components/BuyEarn"
import Custody from "@/components/Custody";
import ApeSafariSplash from "@/components/ApeSafariSplash";
import JungleJamboree from "@/components/JungleJamboree";
import WildWalletExpedition from "@/components/WildWalletExpedition";
import BananaBonus from "@/components/BananaBonus";
import ApeExtravaganza from "@/components/ApeExtravaganza";
import CarouselTest from "@/components/CarouselTest";
import Waiting from "@/components/Waiting";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Presale />
      <Features />
      <BuyEarn />
      <Custody />
      <TempusFugit />
      {/* <ApeSafariSplash />
      <JungleJamboree />
      <WildWalletExpedition />
      <BananaBonus />
      <ApeExtravaganza /> */}
      <CarouselTest />
      <Waiting />


    </>
  );
}
