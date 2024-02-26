
type numProp = {
    num: string,
    unit: string,
    flip: boolean,
};

const NumberBox = ({num, unit, flip} : numProp ) => {
    return (
        <div className="flex flex-col items-center mt-1 px-1">
            <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-5 h-1  text-2xl md:text-4xl mt-4 ">
                {/* <div className="rounded-t-lg rounded-b-lg bg-[#343650] w-full h-full"></div> */}

                <div className="text-[26px] absolute text-black z-10 font-medium font-roboto md:text-7xl font-mono ">
                    {num}
                </div>

                {/* <div className=" rounded-b-lg rounded-t-lg bg-[#2c2e3f] w-full h-full"></div> */}

                {/* <div className={`absolute  w-full h-1/2 top-0  rounded-t-lg z-5 ${flip ? 'animate-flip bg-rose-200' : 'bg-transparent'}`}></div> */}
                {/* Two Small Dots */}
                {/* <div className="absolute -right-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]"></div>
                <div className="absolute -left-1 top-[60px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]" ></div> */}

            </div>
            <p className="text-lg mt-3 font-semibold text-rose-200  md:text-2xl ">
                {unit}
            </p>
        </div>
    )
}

export default NumberBox