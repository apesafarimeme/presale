import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS, SOCIAL_NAV_LINKS } from "../constants"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
        <Link href="/">
            <Image src="/icons/apesafari-logo.svg" alt="logo" width={148} height={20} />
        </Link>
        <ul className="hidden h-full gap-6 lg:flexCenter">
          <Link href="#presale" className="regular-16 text-[#F13C14] flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            PRESALE
            <span className="regular-12 text-white bg-[#F13C14] rounded-xl pl-4 pr-4 pt-1 pb-1 ml-1 relative">LIVE</span>
          </Link>
          {NAV_LINKS.map((link) => (
              <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              </Link>
          ))}
        </ul>
        <ul className="hidden h-full gap-5 lg:flexEnd">
          {SOCIAL_NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              <Image src={link.icon} alt={link.label} width={24} height={24} className="flexCenter cursor-pointer pb-1.5 transition-all" />
            </Link>
          ))}
        </ul>
        <div className="lg:flexEnd hidden">
          <Button
            type="button"
            title="Connect"
            icon=""
            variant="btn_dark_green"
          />
        </div>

        <Image 
          src="/icons/menu_shadow.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
    </nav>
  )
}

export default Navbar