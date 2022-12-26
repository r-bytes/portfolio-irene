import { useState } from "react"

const FilterBanner = () => {
    const [clickedOn, setClickedOn] = useState(0)
    return (
        <div className="w-full">
            <ul className="bg-primaryAccent h-8 p-2 w-full flex justify-center items-center space-x-2">
                <span> filter: </span>
                <li 
                    className={clickedOn === 0 ? "cursor-pointer font-bold relative" : "cursor-pointer relative"} 
                    onClick={() => setClickedOn(0)}>
                        alles
                    
                    {clickedOn === 0 ?
                        <span className="absolute top-5 left-[-50%] border-l-[40px] border-l-transparent border-t-[15px] border-t-accent border-r-[40px] border-r-transparent"></span>
                    : "" }
                </li>
                <span className="ml-2">|</span>
                <li 
                    className={clickedOn === 1 ? "cursor-pointer font-bold relative" : "cursor-pointer relative"} 
                    onClick={() => setClickedOn(1)}>
                        editorial
                        
                    {clickedOn === 1 ?
                        <span className="absolute top-5 border-l-[40px] left-[-20%] border-l-transparent border-t-[15px] border-t-accent border-r-[40px] border-r-transparent"></span>
                    : "" }
                </li>
                <span className="ml-2">|</span>
                <li 
                    className={clickedOn === 2 ? "cursor-pointer font-bold relative" : "cursor-pointer relative"} 
                    onClick={() => setClickedOn(2)}>
                        strips

                    {clickedOn === 2 ?
                        <span className="absolute top-5 border-l-[40px] left-[-50%] border-l-transparent border-t-[15px] border-t-accent border-r-[40px] border-r-transparent"></span>
                    : "" }
                </li>
                <span className="ml-2">|</span>
                <li 
                    className={clickedOn === 3 ? "cursor-pointer font-bold relative" : "cursor-pointer relative"} 
                    onClick={() => setClickedOn(3)}>
                        eigen werk
                    {clickedOn === 3 ?
                        <span className="absolute top-5 border-l-[40px] left-[-10%] border-l-transparent border-t-[15px] border-t-accent border-r-[40px] border-r-transparent"></span>
                    : "" }
                </li>
                <span className="ml-2">|</span>
                <li 
                    className={clickedOn === 4 ? "cursor-pointer font-bold relative" : "cursor-pointer relative"} 
                    onClick={() => setClickedOn(4)}>
                        in opdracht
                    {clickedOn === 4 ?
                        <span className="absolute top-5 border-l-[40px] left-[0%] border-l-transparent border-t-[15px] border-t-accent border-r-[40px] border-r-transparent"></span>
                    : "" }
                </li>
            </ul>
        </div>
    )
}
export default FilterBanner