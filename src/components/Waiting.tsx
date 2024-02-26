import { tribeca } from "@/fonts/fonts"
import Image from "next/image"
import Button from "./Button"
import bnb from "../../public/icons/bnb.svg"
import usdc from "../../public/icons/usdc.svg"
import usdt from "../../public/icons/usdt.svg"
import tempusfugit from "../../public/images/buy-now/3to12.jpg" 

const TempusFugit = () => {
  return (
    <section id="tempusfugit" className="flex flex-col max-container pb-8 bg-[#6D7278]">
        <div className="flex flex-col mt-5 mx-5 border-[10px] border-white rounded-[16px] bg-white">
            <div className="flex flex-col pt-1">
                <p style={tribeca.style} className="flex flexCenter w-full mb-[10px] text-center uppercase tracking-[0.25em] text-[36px] text-[#6D7278]">Buy Now!</p>
            </div>
            <div className="flex flex-col flexCenter bg-white mx-2.5 mb-[15px]">
                <Image src={tempusfugit} width={230} height={230} alt="Safari Ape holding an alarm with 3 minutes to 12"/>
                <Button type='button' title='Buy with Crypto' variant="border-none bg-[#6D7278] text-base text-white font-semibold tracking-[0.15em] rounded-[16px] w-[270px] py-3 my-3 mx-20" />
                <div className="flex flex-row flexCenter">
                    <Image src={bnb} width={40} height={40} alt="BNB coin" />
                    <Image className="mx-4" src={usdc} width={40} height={40} alt="USDC coin" />
                    <Image src={usdt} width={40} height={40} alt="USDT coin" />
                </div>
            </div> 
        </div>
    </section>
  )
}

export default TempusFugit