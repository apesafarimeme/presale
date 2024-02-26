import Image from "next/image";

type buttonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: 'btn_connect' | string;
}

const Button = ({ type, title, icon, variant }: buttonProps) => {
  return (
    <button
    className={`${variant}`}  
    type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="md:h-[40px] whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button