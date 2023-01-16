import { useEffect, useState } from "react"
import { GridImage } from "@components/index"
import { useStateContext } from "context/StateContext"


const Portfolio = ({ portfolioItems }) => {
    const {clickedOn, setClickedOn} = useStateContext()
    const handleClick = (tagName) => {
        setClickedOn(tagName) // set clicked item in context
        
        tagName === "alles" ? setGridItems(portfolioItems)
        : setGridItems(portfolioItems.filter(item => {
            if (item.tagList.length >= 2) { // => Image has Multiple tags
                return item.tagList.find(el => el.title === tagName)

            } else { // => Image has just One tags
                return item.tagList[0].title === tagName
            }
        }))
    }

    useEffect(() => {
        if (clickedOn) {
            setClickedOn(clickedOn)
            handleClick(clickedOn)
        } else {
            setClickedOn("alles")
            handleClick("alles")
        }
    
    }, [clickedOn])
    
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
            id={p._id}
            title={p.title}
            subtitle={p.subtitle}x
            image={p.image}
            description={p.description}
            tags={p.tagList.map(t => t.title)}
            handleClick={() => handleClick()}
        />
    ))


    return (
        <>
            <div className="w-full bg-primaryAccent min-h-10 flex justify-center items-center"> {/* => FilterBanner */}
                <ul className=" h-full w-full p-2 flex flex-wrap justify-center space-x-3 items-center max-w-lg">
                    <span className="text-[#000]/50"> filter: </span>
                    {tagList?.map(tag => ( // Tag Labels (filter)
                        <li key={tag.id}
                            className={clickedOn === tag.name
                                ? "cursor-pointer font-bold relative "
                                : "cursor-pointer hover:text-black/60"
                            }
                            onClick={() => handleClick(tag.name)}
                        >
                            {tag.name} 
                            {clickedOn === tag.name ? // Absolute Styling (triangle)
                                <span className={tag.name === "eigen werk"
                                    ? `hidden sm:inline-block absolute top-8 border-l-[25px] translate-x-[-140%] border-l-transparent border-t-[7px] border-t-accent border-r-[25px] border-r-transparent`
                                    : tag.name === "in opdracht" ? `hidden sm:inline-block absolute top-8 border-l-[20px] translate-x-[-160%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` 
                                    : tag.name === "editorial" ? `hidden sm:inline-block absolute top-8 border-l-[20px] translate-x-[-140%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` 
                                    : tag.name === "strips" ? `hidden sm:inline-block absolute top-8 border-l-[20px] translate-x-[-110%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` 
                                    : `hidden sm:inline-block absolute top-8 border-l-[20px] translate-x-[-100%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent`
                                }/> : "" 
                            }
                        </li>
                    ))}
                </ul>
            </div>
            <div className="max-w-7xl px-5 sm:px-10 pt-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12"> {/* => Show Grid Items */}
                {allGridItems}
            </div>
        </>
    )
}
export default Portfolio