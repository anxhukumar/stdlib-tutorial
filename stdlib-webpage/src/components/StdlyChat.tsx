import { ReactNode } from "react";
import stdly from "../assets/stdly.png";

function StdlyChat({stdlyChat, stdlyImgClass}: {stdlyChat: ReactNode, stdlyImgClass?: String}) {
  return (
    <div className={`flex flex-row items-center h-52`}>
      
      <img className={`size-60 -translate-x-16 translate-y-12 ${stdlyImgClass}`} src={stdly} alt="stdly cartoon character" />

      <div className="bg-[#d9d9d9ef] h-fit p-1 px-3 rounded-r-4xl rounded-tl-4xl rounded-bl-xs -translate-x-32">
        <div className="text-[#000000] font-manrope text-md font-semibold">{stdlyChat}</div>
      </div>
    
    </div>
  )
}

export default StdlyChat
