import type React from "react";
import logo from '../assets/logo.svg'
import bell from '../assets/bell.svg'
import Chevron from '../assets/Chevron.svg'
const TopBar:React.FC=()=>{

    return (
        <div className="flex items-center justify-between text-black px-4  max-w-360 w-full max-h-12 h-full border border-gray-200 bg-white">

            <div className="flex max-w-120 w-full max-h-9 h-full gap-12">

                <div className="flex max-w-26 w-full max-h-9 h-full gap-1 py-1">
                    <div>
                        <img src={logo} alt="Logo"/>
                    </div>
                    <div>
                        <span className="text-black font-medium">Nest App</span>
                    </div>    
                </div>

                <div className=" flex max-w-82 w-full max-h-9 h-full  border-gray-200 gap-6">
                    <div className="flex flex-col">
                        <span className="text-black text-sm font-medium">Nifty 50</span>
                        <div className="flex max-w-34 w-full max-h-4 h-full gap-2">
                            <span className="text-[#555555] text-xs font-medium">23777.80</span>
                            <div className="flex gap-0.5">
                                <span className=" text-[#198055] text-xs font-medium">+196.65</span>
                                <span className=" text-[#198055] text-xs font-medium">(0.83%)</span>
                            </div>
                        </div>
                    </div>
                    <div className="border border-gray-200"/>
                    <div className="flex flex-col">
                        <span className="text-black text-sm font-medium">Sensex</span>
                        <div className="flex max-w-34 w-full max-h-4 h-full gap-2">
                            <span className="text-[#555555] text-xs font-medium">76,704.13</span>
                            <div className="flex  gap-0.5">
                                <span className=" text-[#198055] text-xs font-medium">+0.83%</span>
                                <span className=" text-[#198055] text-xs font-medium">(+633.29)</span>
                            </div>
                            <img src={Chevron} alt="Chevrone" className=""/>
                        </div>
                    </div>
                </div>  
            </div>
            <div className="flex items-end justify-between max-w-118 w-full max-h-12 h-full gap-8">
                <div className="flex max-w-96 w-full max-h-12 h-full gap-2">
                    <span className="max-w-22 w-full max-h-12 h-full p-3 gap-2.5 font-semibold text-sm text-[#555555]">Dashboard</span>
                    <span className="max-w-22 w-full max-h-12 h-full p-3 gap-2.5 font-semibold text-sm text-[#555555]">Watchlist</span>
                    <span className="max-w-22 w-full max-h-12 h-full p-3 gap-2.5 font-semibold text-sm text-[#555555]">Portfolio</span>
                    <span className="max-w-22 w-full max-h-12 h-full p-3 gap-2.5 font-semibold text-sm text-[#555555]">Positions</span>
                    <span className="max-w-22 w-full max-h-12 h-full p-3 gap-2.5 font-semibold text-sm text-[#555555]">Orders</span>
                </div>
                <div className="flex max-w-16 w-full max-h-12 h-full gap-5 pl-3">
                    <button className="">
                        <img src={bell} alt="Bell" className="max-w-6 max-h-6"/>
                    </button>
                    <div className=" max-w-6 w-full max-h-6 h-full mt-2.5 pt-0.5 pb-1 pl-0.5 gap-2.5 border rounded-3xl border-gray-200 text-[#0F62FE] text-xs items-center justify-center">
                        MS
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TopBar