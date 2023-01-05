import { useState } from "react"
import Image from "next/image"
import { urlFor } from "sanity"

const GridImage = ({ title, subtitle, image, description, tags }) => {
    const [hoveredOn, setHoveredOn] = useState(false)

    // console.log("TEST", tags.map(t => t))

    return (
        <div className="group rounded mx-auto flex flex-col shadow-2xl rounded-b relative"
            onMouseEnter={() => setHoveredOn(!hoveredOn)}
            onMouseLeave={() => setHoveredOn(!hoveredOn)}
        >
            {/* top */}
            <div
                className="rounded"

            >
                <Image
                    // group-hover:scale-105 transition-transform duration-300 ease-in-out
                    className="rounded-t w-full h-full object-cover"
                    alt={image}
                    src={urlFor(image).url()}
                    width={1000}
                    height={1000}
                    priority={true}
                />
            </div>
            {/* bottom */}
            {hoveredOn ? (
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

                    {tags.length > 1 ? (tags.map((t, index) => (
                        <span key={index} className="py-0.5 px-3 border border-black self-start">
                            {t}
                        </span>
                    ))
                    ) : (
                        <span className="py-0.5 px-3 border border-black self-start">
                            {tags[0]}
                        </span>
                    )}
                </div>
            ) : (
                ""
            )}
        </div>
    )
}

export default GridImage