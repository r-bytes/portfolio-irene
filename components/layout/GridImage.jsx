import { useState } from "react"
import Image from "next/image"
import { urlFor } from "sanity"

const GridImage = ({ title, subtitle, image, description, tags }) => {
    const [hoveredOn, setHoveredOn] = useState(false)
    return (
        <div className="group rounded mx-auto flex flex-col shadow-2xl rounded-b relative"
            onMouseEnter={() => setHoveredOn(!hoveredOn)}
            onMouseLeave={() => setHoveredOn(!hoveredOn)}
        >
            
            <div className="rounded"> {/* => Card Image */}
                <Image
                    className="rounded-t w-full h-full object-cover"
                    alt={image}
                    src={urlFor(image).url()}
                    width={1000}
                    height={1000}
                    priority={true}
                />
            </div>
            {hoveredOn ? ( // => Card Overlay
                <div
                    className="absolute w-full h-full min-h-fit group-hover:bg-primaryAccent group-hover:opacity-80 transition-transform duration-300 ease-in-out
                        text-left p-6 flex flex-col justify-between"
                >
                    <div className="">
                        <h1 className="text-xl font-semibold"> {title} </h1>
                        <h3 className="text-sm mb-2"> {subtitle} </h3>
                    </div>
                    <p className="text-tertiary mb-3 leading-7 text-md">
                        {description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {tags.length > 1 ? (tags.map((t, index) => ( // => Object has Multiply tags
                            <span key={index} className="py-0.5 px-3 border border-black self-start">
                                {t}
                            </span>
                        ))
                        ) : ( // => Object has just 1 tag
                            <span className="py-0.5 px-3 border border-black self-start">
                                {tags[0]}
                            </span>
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default GridImage