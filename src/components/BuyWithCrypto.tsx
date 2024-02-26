// components/BuyWithCrypto.tsx

import Image from "next/image"
import bnb from "../../public/icons/bnb.svg"
import usdc from "../../public/icons/usdc.svg"
import usdt from "../../public/icons/usdt.svg"

type buyWithCryptoProps = {
    type: 'button' | 'submit'
    title: string
    // variant: string
}

const variant = "border-none bg-[#6D7278] rounded-[16px] w-[270px] py-3 my-3 mx-20"

const BuyWithCrypto = ({ type, title }: buyWithCryptoProps) => {
    return (
        <>
            <button 
                type={type}
                className={`${variant}`}
            >     
            <label className="text-sm text-white font-semibold tracking-[0.15em] cursor-pointer">{title}</label>
            </button>
            <div className="flex flex-row flexCenter">
                <Image src={bnb} width={40} height={40} alt="BNB coin" />
                <Image className="mx-4" src={usdc} width={40} height={40} alt="USDC coin" />
                <Image src={usdt} width={40} height={40} alt="USDT coin" />
            </div>
        </>
    )
}

// title='Buy Wild Wallet Expedition' variant="border-none bg-[#6D7278] rounded-[16px] w-[270px] py-3 my-3 mx-20" />

export default BuyWithCrypto