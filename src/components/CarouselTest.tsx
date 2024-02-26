import { tribeca } from "@/fonts/fonts"
import Image from "next/image"
import Button from "./Button"
import BuyWithCrypto from "./BuyWithCrypto"
import Discount from "./Discount"

const discounts = [
    {discount: 10, title:'ApeSafari Splash', subtitle:'Grab 10% Off Your ApeSafari Crypto Adventure', image:'/images/apesafarisplash.jpeg'},
    {discount: 20, title:'Jungle Jamboree', subtitle:'Secure ApeSafari Coins with a 20% Discount', image:'/images/junglejamboree.jpeg'},
    {discount: 30, title:'Wild Wallet Expedition', subtitle:'Roar into Savings with 30% off ApeSafari', image:'/images/wild-wallet-expedition/wildwalletexpedition.jpg'},
    {discount: 40, title:'Banana Bonus', subtitle:'Swing into ApeSafari Crypto at a 40% Discount', image:'/images/banana-bonus/bananabonus.jpg'},
    {discount: 50, title:'ApeSafari Extravaganza', subtitle:'Half-Price Adventure with a 50% ApeSafari Discount', image:'/images/ape-extravaganza/apeextravaganza.jpg'},
]

const CarouselTest = () => {
  return (
    <section id="presale" className="flex flex-col max-container pb-8 bg-[#44D7B6]">
        <div className="flex flex-col mt-5 mx-5 border-[10px] border-white rounded-[16px] bg-white">
            <div className="flex flex-col pt-1">
                <p style={tribeca.style} className="flex flexCenter w-full mb-[10px] text-center uppercase tracking-[0.25em] text-[36px] text-[#44D7B6]">Discounts</p>
                <p className="flex flexCenter font-normal text-[15px] tracking-[0.2em] mb-[14px]">Deals for small & big Whales</p>
            </div>
            {/* inner framw */}
            <Discount />
            {/* <Discount discountValue={10} title='ApeSafari Splash' subtitle='Grab 10% Off Your Ape Safari Crypto Adventure' image='/images/apesafarisplash.jpeg' /> */}
            {/* <div className="flex flex-col justify-center bg-white pb-5 mx-2.5 mb-[15px] border-2 rounded-[16px] border-black/50">
                <p className="text-black text-base text-center ml-[1px] tracking-[0.15em] font-bold mt-[18px] mb-[20px]">Ape Safari Splash</p>
                <div className="flex flex-row justify-between">
                    <Button type='button' title="" icon="/icons/arrow-left@1x.png" variant="pl-4"/>
                    <Image className="rounded-[16px] shadow-md shadow-black/50" src="/images/apesafarisplash.jpeg" width={230} height={230} alt="ApeSafari Splash."/>
                    <Button type='button' title="" icon="/icons/arrow-right@1x.png" variant="pr-4"/>
                </div>
                <div className="flex flex-col flexCenter mt-[25px]">
                    <div className="bg-black/5 border border-[#979797] rounded-[16px] mb-[20px]">
                        <p className="font-medium text-[15px] text-center tracking-[0.15em] py-[10px] w-[270px] ">Grab 10% Off Your Ape Safari Crypto Adventure</p>
                    </div>
                    
                    <BuyWithCrypto type="button" title="Buy Carousel Test"/>

                </div>
            </div>  */}
            {/* /end inner frame */}
        </div>
        {/* <Button type='button' title='Buy Now' variant="border-none bg-white text-base text-black font-semibold tracking-[0.15em] rounded-[16px] py-3 my-3 mx-20" /> */}
    </section>
  )
}

export default CarouselTest