import type React from "react"


const CreateWatchlist:React.FC =()=> {
    return (
        <div className="flex flex-col max-w-90  w-full  max-h-53 h-full border border-gray-200 rounded-md">
            <div className="flex  justify-between p-3 max-w-90 w-full max-h-11 h-full bg-[#E7EFFF]">
                <h3 className="text-[#2A2A2B] font-medium">Create Watchlist</h3>
                <button className="w-4 h-4">X</button>
            </div>
            <div className="flex flex-col justify-between max-w-90 w-full max-h-42 h-full pt-6 pr-4 pb-4 pl-4 gap-4">
                <div className="flex flex-col max-w-82 w-full max-h-18 h-full gap-1 ">
                    <h5 className="text-[#555555]">Watchlist name</h5>
                    <input type="text"
                        placeholder="Enter watchlist name"
                        className="flex max-w-74 w-full max-h-10 h-full  p-6 border  border-gray-200"
                    />

                </div>
                <div className="flex flex-col items-end">
                    <button className="max-w-20 w-full max-h-10 h-full rounded-3xl pt-2 pr-4 pb-3 pl-4 gap-2 bg-[#0F62FE] text-white">
                    Create
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateWatchlist