import { useState } from "react"
import { Button, FilterBanner, GridImage } from "@components/index"
import { urlFor } from "sanity"

const Portfolio = ({ portfolioItems }) => {
    const [clickedOn, setClickedOn] = useState(0)
    const tagList = [{id: 1, name: "alles"}, {id: 2, name: "editorial"}, {id: 3, name: "strips"}, {id: 4, name: "eigen werk"}, {id: 5, name: "in opdracht"}]
    const [gridItems, setGridItems] = useState(portfolioItems)

    // [
    //     {
    //       "_id": "126161a3-9079-49de-a96c-7586eda1627b",
    //       "description": "Quis elit incididunt anim sint ad voluptate quis qui quis voluptate minim minim. Dolore id laboris laboris minim. Id deserunt fugiat dolore minim quis. Qui laboris nostrud laboris commodo exercitation dolore amet. Anim voluptate nostrud aliquip ea dolor aute aute do. Do velit nostrud ad officia est deserunt ad non ipsum fugiat laboris.",
    //       "image": {
    //         "_type": "image",
    //         "asset": {
    //           "_ref": "image-173a531782c56a6b0a2bcc51612ae78414c69d3a-2717x3543-jpg",
    //           "_type": "reference"
    //         }
    //       },
    //       "subtitle": "Sub title 3",
    //       "tagList": {
    //         "title": "strips"
    //       },
    //       "title": "Test 3"
    //     },
    // ]
    
    let filteredGridItems = gridItems.map(p => (
        <GridImage
            key={p._id}
            image={p.image}
        />
    ))

    const handleClick = (tagName) => {
        // const { title } = portfolioItems[1].tagList

        setClickedOn(tagName)
        console.log("CLICKED ON =>", tagName)
        console.log("PORTFOLIO ITEMS =>", portfolioItems)
        // console.log("CLICKED ITEMS =>", title)
    }

    return (
        <>
            {/* <FilterBanner /> */}
            <div className="w-full bg-primaryAccent min-h-10 flex justify-center items-center">
                <span> filter: </span>
                <ul className=" h-full w-full p-2 flex flex-wrap justify-evenly items-center space-x-0 max-w-lg">
                    {tagList?.map(tag => (
                        <li key={tag.id}
                            className={clickedOn === tag.name ?
                                "cursor-pointer font-bold relative" :
                                "cursor-pointer"
                            } 
                            onClick={() => handleClick(tag.name)}
                        >
                            {tag.name}
                            
                        {clickedOn === tag.name ?
                            <span className={tag.name === "eigen werk" ?
                                `absolute top-8 border-l-[25px] translate-x-[-140%] border-l-transparent border-t-[7px] border-t-accent border-r-[25px] border-r-transparent` : tag.name === "in opdracht" ?
                                `absolute top-8 border-l-[20px] translate-x-[-160%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` : tag.name === "editorial" ?
                                `absolute top-8 border-l-[20px] translate-x-[-140%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` : tag.name === "strips" ?
                                `absolute top-8 border-l-[20px] translate-x-[-110%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent` :
                                `absolute top-8 border-l-[20px] translate-x-[-100%] border-l-transparent border-t-[7px] border-t-accent border-r-[20px] border-r-transparent`
                            }/>
                        : "" }
                        </li>
                    ))}
                </ul>
            </div>

            <div className="max-w-7xl px-10 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {/* {gridItems} */}
            </div>
            <div className="pb-20">
                <Button
                    primary
                    href={"https://www.duckduckgo.com"}
                    text={"Bekijk alles"}
                />
            </div>
        </>
    )
}
export default Portfolio