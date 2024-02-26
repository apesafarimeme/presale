'use client'
import Image from "next/image"
import presale from "../../public/images/presale.png"
import ProgressBar from "./ProgressBar"
import useTimer from "@/helpers/useTimer"
import PriceCountdownContainer from "./PriceCountdownContainer"
import { noto_sans, tribeca } from "@/fonts/fonts"
import Button from "@/components/Button"
import bnb from "../../public/icons/bnb.svg"
import usdc from "../../public/icons/usdc.svg"
import usdt from "../../public/icons/usdt.svg"


const Presale = () => {
    // const timeLeft = useTimer(Date.now() + 1000 * 60 * 60 * 24);
    const timeLeftCounter = useTimer(Date.now() + 1000 * 10); // for test 10 seconds
    
    return (
    <section id="presale" className="flex flex-col max-container md:flexCenter pb-5 bg-[#5B5523]">
        <div className="flex flex-col md:w-2/3 mt-5 mx-5 border-[10px] rounded-[16px] bg-[#A7A05C]">
            <div className="flex flex-col pt-3">
                <div className="flex flex-row content-center mx-5">
                    <div className="flex-1"></div>
                    <Image src={presale} width={100} height={100} alt="Ape selling cryptocoins" />
                    <div className="flex-1">
                        <div className="text-white ml-auto w-[55px] xs:w-[75px] h-[35px] rounded-[16px] bg-[#E02020] text-center pt-[5px] font-semibold tracking-[0.1em]">
                            Live!
                        </div>
                    </div>
                </div>
                <p style={tribeca.style} className="flex flexCenter w-full mb-[6px] text-center uppercase tracking-[0.25em] text-[36px] text-[#DFCA21]">Presale</p>
            </div>
            <div className="flex flex-col justify-center bg-white mx-2.5 mb-[15px] border-2 border-black/50">
                <p className="text-black text-base text-center ml-[1px] tracking-[0.15em] font-bold uppercase mt-[18px] mb-[px]">Price increases in</p>
                <PriceCountdownContainer days={timeLeftCounter.days} hours={timeLeftCounter.hours} minutes={timeLeftCounter.minutes} seconds={timeLeftCounter.seconds} />
                <ProgressBar percentage={65} color="#E02020" height={26} />
                <hr className="flex h-[2px] mx-[20px] mt-[24px] bg-[gray-600] border-[#979797] rounded dark:bg-black"></hr>
                <p className="mt-[18px] text-[15px] text-center font-medium tracking-[0.15em]">1 $ApeSafari = €{(0.003 + (timeLeftCounter.round * 0.0009)).toFixed(4)}</p>
                <p className="text-center text-sm uppercase font- tracking-[0.15em] mt-[13px]">€ 2,000,000 raised</p>
                <ProgressBar percentage={22} color="#E02020" height={26} />
                <div className="flex flex-grow justify-center pt-3 pb-4">
                    <p className="text-" >10,000,000</p>
                    <p className="px-2">/</p>
                    <p className="text-[#000000]/25">30,000,000,000</p>
                </div>
                <p className="uppercase text-[13px] text-black text-center tracking-[0.15em] font-medium pb-5">buy now before pice increases</p>
            </div> 
        </div>
        <Button type='button' title='Buy with Crypto' variant="border-none bg-white text-base text-black font-semibold tracking-[0.15em] rounded-[16px] py-3 my-3 mx-20 md:w-1/4" />
        <div className="flex flex-row flexCenter">
            <Image src={bnb} width={40} height={40} alt="BNB coin" />
            <Image className="mx-4" src={usdc} width={40} height={40} alt="USDC coin" />
            <Image src={usdt} width={40} height={40} alt="USDT coin" />
        </div>
    </section>
  )
}

export default Presale