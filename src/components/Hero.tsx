import Image from 'next/image'
import toTheMoon from '../../public/images/apesafari-to-the-moon.png'
import savanna from '../../public/images/coin_savanna_2.png'
import Button from './Button'

const Hero = () => {
  return (
    <section id='hero' className="flex flex-col max-contaier padding-container  pb-5 bg-[#DD9B8F]">
        <div className='flex flex-row w-full justify-between mb-2'>
            {/* <div className=''> */}
                <Image className='hidden xs:flex' src={toTheMoon} width={130} height={130}  alt={'ApeSafari to the moon'} />
            {/* </div> */}
            <div className='flex flex-col justify-around gap-3 w-full xs:ml-[20px] md:flex-row md:justify-evenly md:items-center'>
                <Button type='button' title='Connect Wallet' variant='btn_connect' />
                <Button type='button' title='Buy with Crypto' variant='btn_connect' />
            </div>
        </div>
        <div className='pt-2'>
            <Image src={savanna} alt='apesafari coin in savanna' className='border-[10px] rounded-[16px]' />
        </div>
    </section>
  )
}

export default Hero