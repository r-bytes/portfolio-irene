import { useState } from "react"
import { Button, FilterBanner, GridImage } from "@components/index"
import { BsFilter } from "react-icons/bs"

const Portfolio = ({ portfolioItems }) => {
    const [clickedOn, setClickedOn] = useState("")
    const [gridItems, setGridItems] = useState(portfolioItems)
    const tagList = [
        {id: 1, name: "alles"},
        {id: 2, name: "|"},
        {id: 3, name: "editorial"},
        {id: 4, name: "|"},
        {id: 5, name: "strips"},
        {id: 6, name: "|"},
        {id: 7, name: "eigen werk"},
        {id: 8, name: "|"},
        {id: 9, name: "in opdracht"}
    ]
    
    let allGridItems = gridItems.map(p => (
        <GridImage
            key={p._id}
            title={p.title}
            subtitle={p.subtitle}
            image={p.image}
            description={p.description}
            tags={p.tagList.map(t => t.title)}
        />
    ))

    const handleClick = (tagName) => {
        setClickedOn(tagName)
        
        tagName === "alles" ?
        setGridItems(portfolioItems) :
        setGridItems(portfolioItems.filter(item => {
            if (item.tagList.length >= 2) { // => Image has Multiple tags
                return item.tagList.find(el => el.title === tagName)

            } else { // => Image has just One tags
                return item.tagList[0].title === tagName
            }
        }))
    }

    return (
        <>
            <div className="w-full bg-primaryAccent min-h-10 flex justify-center items-center"> {/* => FilterBanner */}
                <ul className=" h-full w-full p-2 flex flex-wrap justify-center space-x-3 items-center max-w-lg">
                    {tagList?.map(tag => ( // Tag Labels (filter)
                        <li key={tag.id}
                            className={clickedOn === tag.name ?
                                "cursor-pointer font-bold relative" :
                                "cursor-pointer"
                            }
                            onClick={() => handleClick(tag.name)}
                        >
                            {tag.name} {clickedOn === tag.name ? // Absolute Styling (triangle)
                                <span className={tag.name === "eigen werk" ?
                                    `absolute top-8 border-l-[25px] translate-x-[-140%] border-l-transparent border-t-[7px] border-t-accent border-r-[25px] border-r-transparent` : tag.name === "in opdracht" ?
                                    `absolute top-8 border-l-[20px] translate-x-[-160%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` : tag.name === "editorial" ?
                                    `absolute top-8 border-l-[20px] translate-x-[-140%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` : tag.name === "strips" ?
                                    `absolute top-8 border-l-[20px] translate-x-[-110%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` :
                                    `absolute top-8 border-l-[20px] translate-x-[-100%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent`
                                }/> : "" 
                            }
                        </li>
                    ))}
                    
                    <BsFilter className="text-md" />
                </ul>
            </div>
            <div className="max-w-7xl px-10 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"> {/* => Show Grid Items */}
                {allGridItems}
            </div>
        </>
    )
}
export default Portfolio