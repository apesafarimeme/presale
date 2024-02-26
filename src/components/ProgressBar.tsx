'use client'
type progressbarProps = {
  percentage: number,
  color: string,
  height: number,
}

const ProgressBar = ({ percentage, color, height }: progressbarProps)  => {
  let p = percentage + "%";
  let bgcolor = "bg-[" + color + "]";
  let outerheight = "h-[" + height + "px]";
  let innerHeight = "h-[" + height + "px]";

  return (
    <div className={`${outerheight} flex flex-row bg-[#D8D8D8] border border-[#979797] rounded-[10px] mx-10 mt-4`}>
      <div className={`${bgcolor} flex flex-row items-center justify-center border border-none w-3/5 rounded-[10px] ${innerHeight}`}>
          <div className="flex text-xs text-white font-semibold">{p}</div>
      </div>
    </div>
  )
}

export default ProgressBar