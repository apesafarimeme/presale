// 'use client'

// import useTimer from "@/helpers/useTimer"

type countdownProps = {
    days: string,
    hours: string,
    minutes: string,
    seconds: string
}

const PriceCountdownContainer = ({days, hours, minutes, seconds}: countdownProps) => {
    // const timeLeft = useTimer(Date.now() + 1000 * 60 * 60 * 24);
    // const timeLeftCounter = useTimer(Date.now() + 1000 * 10); // for test 10 seconds
    
    // console.log(timeLeftCounter.round);
    // console.log();
    return (
        // <div className="flex flexCenter">
            <div className="flex flex-row justify-between px-[25px]">
                <div className="flex flex-col">
                    <p className="text-black text-[28px] text-center tracking-[0.1em] font-medium tabular-nums">
                        {days}
                    </p>
                    <p className="text-black/80 text-xs text-center tracking-[0.2em] font-normal uppercase">
                        days
                    </p>
                </div> 
                <p className="text-[25px] font-medium text-black">:</p>

                <div className="flex flex-col">
                    <p className="text-black text-[28px] tracking-[0.2em] font-medium tabular-nums">
                        {hours}
                    </p>
                    <p className="text-black/80 text-xs text-center tracking-[0.2em] font-normal uppercase">
                        hrs
                    </p>
                </div> 
                <p className="text-[25px] font-medium text-black">:</p>

                <div className="flex flex-col">
                    <p className="text-black text-[28px] tracking-[0.2em] font-medium tabular-nums">
                        {minutes}
                    </p>
                    <p className="text-black/80 text-xs text-center tracking-[0.2em] font-normal uppercase">
                        min
                    </p>
                </div> 
                <p className="text-[25px] font-medium text-black">:</p>

                <div className="flex flex-col">
                    <p className="text-black text-[28px] tracking-[0.2em] font-medium uppercase tabular-nums">
                        {seconds}
                    </p>
                    <p className="text-black/80 text-xs text-center tracking-[0.2em] font-normal uppercase">
                        sec
                    </p>
                </div> 
            </div>
        // </div>
      )
}

export default PriceCountdownContainer