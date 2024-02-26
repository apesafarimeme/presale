import { tribeca } from "@/fonts/fonts"
import Image from "next/image"
import Button from "./Button"

const Custody = () => {
  return (
    <section id="selfcustody" className="flex flex-col max-container pb-8 bg-[#E02020]">
        <div className="flex flex-col mt-5 mx-5 border-[10px] border-white rounded-[16px] bg-white">
            <div className="flex flex-col pt-1">
                <p style={tribeca.style} className="flex flexCenter w-full mb-[10px] text-center uppercase tracking-[0.25em] text-[36px] text-[#E02020]">Self Custody</p>
            </div>
            <div className="flex flex-col justify-center bg-white mx-2.5 mb-[15px] border-2 rounded-[16px] border-black/50">
                <p className="text-black text-base text-center ml-[1px] tracking-[0.15em] font-bold mt-[18px] mb-[20px]">Take Full Control</p>
                <div className="flex flex-row justify-between">
                    <Button type='button' title="" icon="/icons/arrow-left@1x.png" variant="pl-4"/>
                    <Image className="rounded-[16px] shadow-md shadow-black/50" src="/images/custody.jpeg" width={230} height={230} alt="Ape protecting his wallet with a gun"/>
                    <Button type='button' title="" icon="/icons/arrow-right@1x.png" variant="pr-4"/>
                </div>
                <div className="flex flex-col flexCenter mt-[25px]">
                    <div className="bg-black/5 border border-[#979797] rounded-[16px] mb-[20px]">
                        <p className="font-medium text-[15px] text-center tracking-[0.15em] py-[10px] w-[270px] ">Censorship Resistence</p>
                    </div>
                    <div className="bg-black/5 border border-[#979797] rounded-[16px] mb-[20px]">
                        <p className="font-medium text-[15px] text-center tracking-[0.15em] py-[10px]  w-[270px]">Decentralized</p>
                    </div>
                    <div className="bg-black/5 border border-[#979797] rounded-[16px] mb-[20px]">
                        <p className="font-medium text-[15px] text-center tracking-[0.15em] py-[10px]  w-[270px]">Increast Security</p>
                    </div>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Custody