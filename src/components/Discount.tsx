// components/Discount.tsx
'use client'
import { useState } from "react"
import Image from "next/image"
import { wrap } from "popmotion";
import { AnimatePresence, motion } from "framer-motion"
import BuyWithCrypto from "./BuyWithCrypto"

type discountProps = {
    discountValue: number
    title: string
    subtitle: string
    image: string
}

const discounts = [
    {discountValue: 10, title:'ApeSafari Splash', subtitle:'Grab 10% Off Your ApeSafari Crypto Adventure', image:'/images/apesafarisplash.jpeg'},
    {discountValue: 20, title:'Jungle Jamboree', subtitle:'Secure ApeSafari Coins with a 20% Discount', image:'/images/junglejamboree.jpeg'},
    {discountValue: 30, title:'Wild Wallet Expedition', subtitle:'Roar into Savings with 30% off ApeSafari', image:'/images/wild-wallet-expedition/wildwalletexpedition.jpg'},
    {discountValue: 40, title:'Banana Bonus', subtitle:'Swing into ApeSafari Crypto at a 40% Discount', image:'/images/banana-bonus/bananabonus.jpg'},
    {discountValue: 50, title:'ApeSafari Extravaganza', subtitle:'Half-Price Adventure with a 50% ApeSafari Discount', image:'/images/ape-extravaganza/apeextravaganza.jpg'},
]

const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    // center: {
    //   zIndex: 1,
    //   x: 0,
    //   opacity: 1
    // },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const Discount = () => {
    const [[discount, direction], setDiscount] = useState([0, 0]);
    const discountIndex = wrap(0, discounts.length, discount);
    const paginate = (newDirection: number) => {
        setDiscount([discount + newDirection, newDirection]);
    };

    return (
        // <AnimatePresence initial={false} custom={direction}>
            <motion.div
                key={discountIndex}
                // src={discounts[discountIndex]}
                // custom={direction}
                // variants={variants}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{
                    ease: "linear",
                    duration: 1,
                    x: { duration: 1 },
                    opacity: { duration: 1 }
                }}
                className="">
                    <div className="flex flex-col justify-center bg-white pb-5 mx-2.5 mb-[15px] border-2 rounded-[16px] border-black/50">
                        <div className="flex flex-col justify-center">
                            <p className="text-black text-base text-center ml-[1px] tracking-[0.15em] font-bold mt-[18px] mb-[20px]">{discounts[discountIndex].title}</p>
                            <div className="flex flex-row justify-center items-center">
                                {/* <Button type='button' title="" icon="/icons/arrow-left@1x.png" variant="pl-4"/> */}
                                <div className="prev pr-5 text-xl" onClick={() => paginate(-1)}>{"◀︎"}</div>
                                <Image className="rounded-[16px] shadow-md shadow-black/50" src={discounts[discountIndex].image} width={230} height={230} alt={discounts[discountIndex].title}/>
                                <div className="next pl-5 text-xl" onClick={() => paginate(1)}>{"▶︎"}</div>
                                {/* <Button type='button' title="" icon="/icons/arrow-right@1x.png" variant="pr-4"/> */}
                            </div>
                            <div className="flex flex-col flexCenter mt-[25px]">
                                <div className="bg-black/5 border border-[#979797] rounded-[16px] mb-[20px]">
                                    <p className="font-medium text-[13px] text-center tracking-[0.12em] py-[10px] w-[270px]">{discounts[discountIndex].subtitle}</p>
                                </div>
                                <BuyWithCrypto type="button" title={'Buy ' + discounts[discountIndex].title}/>
                            </div>
                        </div>
                    </div>
                </motion.div>
        // </AnimatePresence>
    )
}

export default Discount