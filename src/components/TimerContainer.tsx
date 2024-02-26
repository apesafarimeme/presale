// import { numProp } from "./NumberBox"
import NumberBox from "./NumberBox";

type timeProps = {
    days: number,
    hours: number ,
    minutes: number,
    seconds: number,
  }

  
  
  const TimerContainer = ({days, hours, minutes, seconds }: timeProps) => {
    
    let daysString = days.toString();
    let hoursString = hours.toString();
    let minutesString = minutes.toString();
    let secondsString = seconds.toString();

    const day = "D";
    const hour = "H";
    const minute = "M";
    const second = "S";

    let daysFlip = false;
    let hoursFlip = false;
    let minutesFlip = false;
    let secondsFlip = true;
  
   if (+seconds <= +0 && +minutes <= +0 && +hours <= +0 && +days <= +0){
     daysFlip =  false;
     hoursFlip =  false;
     minutesFlip = false;
     secondsFlip = false;
   }
  
   if(seconds == 0){
     if( minutes !=0){
      seconds=59;
     }
     
     secondsFlip = false;
     minutesFlip = true;
   }
   if (minutes == 0 ){
      if( hours !=0){
        minutes=59;
      }
     
     minutesFlip = false;
     hoursFlip = true;
   }
  
   if( hours == 0){
     hoursFlip = false;
     if(+days != 0){
       daysFlip = true;
     }
     
   }
  
   
  
     if(days < +10){
       daysString = "0" + daysString;
     }
  
     if(hours <10){
       hoursString = "0" + hoursString;
     }
  
     if(minutes <10){
       minutesString = "0" + minutesString;
     }
  
     if(seconds < 10){
       secondsString = "0" + secondsString;
       
     }
    
      return (
  
       <div className=" mt-2 md:mt-20  rounded-xl">
            <div className="grid grid-cols-4 gap-1 py-6 px-1 md:flex md:items-center md:justify-between md:mt-2  rounded-xl md:px-6 md:py-8 ">
                <NumberBox num = {daysString} unit = {day} flip = {daysFlip}/>
                
                <span className=" hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</span>
                <NumberBox num = {hoursString} unit = {hour} flip = {hoursFlip} />
                
                <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</span>
                <NumberBox num = {minutesString} unit = {minute} flip = {minutesFlip} />

                <span className="hidden text-5xl -mt-8 md:inline-block md:text-7xl font-normal text-gray-50 ">:</span>
                <NumberBox num = {secondsString} unit = {second} flip = {secondsFlip} />
            </div>
     
        </div>
      )
  }

  export default TimerContainer