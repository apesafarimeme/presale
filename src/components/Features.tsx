'use client'
import {Accordion, AccordionItem} from "@nextui-org/react";
import { tribeca } from "@/fonts/fonts"
import Image from "next/image"
import Button from "./Button"

const Features = () => {
    const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    
    const ruPullSaveContent = {}
    
    const itemClasses = {
        base: "mt-3",
        title: "font-medium text-[15px] tracking-[0.15em]",
        trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14",
        indicator: "text-medium",
        content: "text-small px-2 list-disc",
        heading: "bg-black/5 border border-[#979797] rounded-[16px] mb-[20px]"
    };

    const itemStyles = "list-disc"
    
  return (
    <section id="features" className="flex flex-col max-container pb-8 bg-[#32C5FF]">
        <div className="flex flex-col mt-5 mx-5 border-[10px] border-white rounded-[16px] bg-white">
            <div className="flex flex-col pt-1">
                <p style={tribeca.style} className="flex flexCenter w-full mb-[10px] text-center uppercase tracking-[0.25em] text-[36px] text-[#32C5FF]">Features</p>
                <p className="flex flexCenter font-normal text-[15px] tracking-[0.2em] mb-[14px]">ApeSafari Key Features</p>
            </div>
            <div className="flex flex-col justify-center bg-white mx-2.5 mb-[15px] border-2 rounded-[16px] border-black/50">
                <p className="text-black text-base text-center ml-[1px] tracking-[0.15em] font-bold mt-[18px] mb-[20px]">Safe & Secure</p>
                <div className="flex flex-row justify-center">
                    <Button type='button' title="" icon="/icons/arrow-left@1x.png" variant=""/>
                    <Image className="mx-1 xs:mx-4 rounded-[16px] shadow-md shadow-black/50" src="/images/save-secure.jpeg" width={230} height={230} alt="Safari Ape holding a wooden board with the text SAVE AND SECURE written on it"/>
                    <Button type='button' title="" icon="/icons/arrow-right@1x.png" variant=""/>
                </div>
                <div className="flex flex-col justify-center mt-[25px]">
                    {/* <div className="bg-black/5 border border-[#979797] rounded-[16px] mb-[20px]">
                        <p className="font-medium text-[15px] text-center tracking-[0.15em] py-[10px] w-[270px] ">BEP-20 (ERC-20) Token</p>
                    </div>
                    <div className="bg-black/5 border border-[#979797] rounded-[16px] mb-[20px]">
                        <p className="font-medium text-[15px] text-center tracking-[0.15em] py-[10px]  w-[270px]">Openzeppelin Library</p>
                    </div>
                    <div className="bg-black/5 border border-[#979797] rounded-[16px] mb-[20px]">
                        <p className="font-medium text-[15px] text-center tracking-[0.15em] py-[10px]  w-[270px]">Rugpull Save</p>
                    </div> */}
                
                    <Accordion
                        className=""
                        variant="splitted"
                        itemClasses={itemClasses}
                        fullWidth={true}
                    >
                        <AccordionItem 
                            key="1"
                            aria-label="BEP-20 (ERC-20) Token"
                            startContent={
                                <Image src={"/icons/bnb.svg"} alt="BSC Logo" width={24} height={24}/>
                            }
                            title="BEP-20 (ERC-20) Token">
                            <ul className="list-disc ml-4 pl-2 mt-[-12px] pb-3">
                                <li>High Throughput</li>
                                <li>Ethereum Compatibility</li>
                                <li>Cross-Chain Compatibility</li>
                                <li>Lower Transactiion Costs</li>
                            </ul>
                        </AccordionItem>

                        <AccordionItem 
                            key="2" 
                            aria-label="Openzeppelin Library"
                            startContent={
                                <Image src={"/icons/openzeppelin.svg"} alt="BSC Logo" width={24} height={24}/>
                            }
                            title="Openzeppelin Library">
                            {defaultContent}
                        </AccordionItem>

                        <AccordionItem 
                            key="3" 
                            aria-label="Rugpull Save" 
                            title="Rug Pull Save">
                            {/* {defaultContent} */}
                            <ul className="list-disc  ml-4 pl-2 mt-[-12px] pb-3">
                                <li>Early Founder Exit</li>
                                <li>Liquitity Token Burn</li>
                            </ul>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div> 
        </div>
        {/* <Button type='button' title='Buy Now' variant="border-none bg-white text-base text-black font-semibold tracking-[0.15em] rounded-[16px] py-3 my-3 mx-20" /> */}
    </section>
  )
}

export default Features