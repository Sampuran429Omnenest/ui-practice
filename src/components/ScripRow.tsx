import type React from "react"

interface ScripRowProps{
    scripName: string
}

const ScripRow:React.FC<ScripRowProps>=({
    scripName,
} : ScripRowProps) => {
    return (
        <div className="flex items-center justify-between gap-4 py-3 text-black  max-w-[318px] w-full h-[62px] border border-gray-200 ">
            <div className="flex items-center gap-3 max-w-[209px] h-5">
                <span className="text-sm font-medium text-black">{scripName}</span>
                <span className="text-xs font-medium text-[#555555] uppercase ">NSE</span>
            </div>
            <div className="flex flex-col items-end gap-0.5 w-[93px] h-[38px] ">
                <span className="font-medium text-[#555555]">3600.10</span>
                <div className="flex text-[#198055] text-xs">
                    <span>+1.23%</span>
                    <span>(+43.80)</span>
                </div>
            </div>
        </div>
    )
}
export default ScripRow