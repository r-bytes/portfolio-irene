import { useState } from "react"
import Image from "next/image"
import { urlFor } from "sanity"
import { useRouter } from "next/router"


const GridImage = ({ id, title, subtitle, image, description, tags }) => {
    const [hoveredOn, setHoveredOn] = useState(false)
    const navigateTo = useRouter().push

    return (
        <div className="group mx-auto flex flex-col relative"
            onMouseEnter={() => setHoveredOn(!hoveredOn)}
            onMouseLeave={() => setHoveredOn(!hoveredOn)}
        >
            
            <div className="max-w-sm max-h-sm"> {/* => Card Image */}
                <Image
                    className="object-cover max-h-96 w-full"
                    alt={image}
                    src={urlFor(image).url()}
                    width={500}
                    height={500}
                    priority={true}
                />
            </div>
            {hoveredOn ? ( // => Card Overlay
                <div
                    className="cursor-pointer absolute w-full h-full text-primary min-h-fit group-hover:bg-primaryAccent group-hover:opacity-80 transition-transform duration-300 ease-in-out
                        text-left p-6 flex flex-col justify-evenly"
                    onClick={() => navigateTo(`/portfolio/${id}`)}
                >
                    <div>
                        <h1 className="text-xl font-semibold"> {title} </h1>
                        <h3 className="text-sm mb-2"> {subtitle} </h3>
                    </div>
                    <p className="mb-3 leading-7 text-md">
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