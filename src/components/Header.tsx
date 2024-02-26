import Image from "next/image"

const Header = () => {
  return (
    <div className="flex-col flexCenter max-contaier padding-container pb-2 bg-white shadow-md">
        <Image src={"/icons/apesafari-logo.svg"} width={125} height={35} alt="Ape Safari Logo" />
        <p className="font-semibold text-[10px] text-[#646464] tracking-[0.25em] ml-[2px] pt-2 text-center">Unleashing Meme Magic in the Heart of Africa!</p>
    </div>
  )
}

export default Header