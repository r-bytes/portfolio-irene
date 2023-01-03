import { useState } from "react"

const FilterBanner = () => {
    const [clickedOn, setClickedOn] = useState(0)
    const tagList = [
        {id: 1, name: "alles"},
        {id: 2, name: "editorial"},
        {id: 3, name: "strips"},
        {id: 4, name: "eigen werk"},
        {id: 5, name: "in opdracht"}
    ]

    return (
        <div className="w-full bg-primaryAccent min-h-10 flex justify-center items-center">
            <span> filter: </span>
            <ul className=" h-full w-full p-2 flex flex-wrap justify-evenly items-center space-x-0 max-w-lg">
                {tagList.map(tag => (
                    <li key={tag.id}
                        className={clickedOn === tag.name ?
                            "cursor-pointer font-bold relative" :
                            "cursor-pointer"
                        } 
                        onClick={() => setClickedOn(tag.name)}
                    >
                        {tag.name}
                        
                    {clickedOn === tag.name ?
                        <span className={tag.name === "eigen werk" ?
                            `absolute top-8 left-[${tag.position}] border-l-[25px] translate-x-[-140%] border-l-transparent border-t-[7px] border-t-accent border-r-[25px] border-r-transparent` : tag.name === "in opdracht" ?
                            `absolute top-8 left-[${tag.position}] border-l-[20px] translate-x-[-160%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` : tag.name === "editorial" ?
                            `absolute top-8 left-[${tag.position}] border-l-[20px] translate-x-[-140%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` : tag.name === "strips" ?
                            `absolute top-8 left-[${tag.position}] border-l-[20px] translate-x-[-110%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` :
                            `absolute top-8 left-[${tag.position}] border-l-[20px] translate-x-[-100%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent`
                        }/>
                    : "" }
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FilterBanner