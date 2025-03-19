import { ReactNode } from "react";
import stdly from "../assets/stdly.png";

function StdlyChat({stdlyChat, stdlyImgClass}: {stdlyChat: ReactNode, stdlyImgClass?: String}) {
  return (
    <div className="flex flex-row items-center h-52">
      
      <img className={`size-60 -translate-x-16 translate-y-16 ${stdlyImgClass}`} src={stdly} alt="stdly cartoon character" />

      <div className="bg-[#D9D9D9] h-fit p-4 rounded-r-4xl rounded-tl-4xl rounded-bl-xs -translate-x-32">
        <p className="text-[#000000] font-mono text-lg">{stdlyChat}</p>
      </div>
    
    </div>
  )
}

export default StdlyChat