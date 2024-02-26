import { tribeca } from "@/fonts/fonts"
import Image from "next/image"
import Button from "./Button"
import bnb from "../../public/icons/bnb.svg"
import usdc from "../../public/icons/usdc.svg"
import usdt from "../../public/icons/usdt.svg"


const ApeExtravaganza = () => {
  return (
    <section id="presale" className="flex flex-col max-container pb-8 bg-[#44D7B6]">
        <div className="flex flex-col mt-5 mx-5 border-[10px] border-white rounded-[16px] bg-white">
            <div className="flex flex-col pt-1">
                <p style={tribeca.style} className="flex flexCenter w-full mb-[10px] text-center uppercase tracking-[0.25em] text-[36px] text-[#44D7B6]">Discounts</p>
                <p className="flex flexCenter font-normal text-[15px] tracking-[0.2em] mb-[14px]">Deals for Small & Big Whales</p>
            </div>
            <div className="flex flex-col justify-center bg-white pb-5 mx-2.5 mb-[15px] border-2 rounded-[16px] border-black/50">
                <p className="text-black text-base text-center ml-[1px] tracking-[0.15em] font-bold mt-[18px] mb-[20px]">ApeSafari Extravaganza</p>
                <div className="flex flex-row justify-between">
                    <Button type='button' title="" icon="/icons/arrow-left@1x.png" variant="pl-4"/>
                    <Image className="rounded-[16px] shadow-md shadow-black/50" src="/images/ape-extravaganza/apeextravaganza.jpg" width={230} height={230} alt="Ape Extravaganza."/>
                    <Button type='button' title="" icon="/icons/arrow-right@1x.png" variant="pr-4"/>
                </div>
                <div className="flex flex-col flexCenter mt-[25px]">
                    <div className="bg-black/5 border border-[#979797] rounded-[16px] mb-[20px]">
                        <p className="font-medium text-[15px] text-center tracking-[0.15em] py-[10px] w-[270px] ">Half-Price Adventure with a 50% ApeSafari Discount</p>
                    </div>
                    <Button type='button' title='Buy Ape Extravaganza' variant="border-none bg-[#6D7278] text-sm text-white font-semibold tracking-[0.15em] rounded-[16px] w-[270px] py-3 my-3 mx-20" />
                    <div className="flex flex-row flexCenter">
                        <Image src={bnb} width={40} height={40} alt="BNB coin" />
                        <Image className="mx-4" src={usdc} width={40} height={40} alt="USDC coin" />
                        <Image src={usdt} width={40} height={40} alt="USDT coin" />
                    </div>
                </div>
            </div> 
        </div>
        {/* <Button type='button' title='Buy Now' variant="border-none bg-white text-base text-black font-semibold tracking-[0.15em] rounded-[16px] py-3 my-3 mx-20" /> */}
    </section>
  )
}

export default ApeExtravaganza