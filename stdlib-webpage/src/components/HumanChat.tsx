import { ReactNode } from "react";
import human from "../assets/human.png";

function HumanChat({humanChat, humanImgClass}: {humanChat: ReactNode, humanImgClass?: String}) {
  return (
    <div className="flex flex-row items-center justify-end h-52">
      
      <div className="bg-[#D9D9D9] h-fit p-4 rounded-l-4xl rounded-tr-4xl rounded-br-xs translate-x-[130px] -translate-y-11">
        <p className="text-[#000000] font-manrope text-lg">{humanChat}</p>
      </div>
    
      <img className={`size-48 translate-x-[70px] translate-y-6 ${humanImgClass}`} src={human} alt="stdly cartoon character" />

    </div>
  )
}

export default HumanChat
