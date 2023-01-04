import Image from "next/image"
import { urlFor } from "sanity"

const GridImage = ({ image }) => {
    return (
        <div className="group rounded mx-auto flex flex-col shadow-2xl rounded-b">
            {/* top */}
            <div className="rounded">
                <Image
                    className="rounded-t w-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    alt={image}
                    src={urlFor(image).url()}
                    width={1000}
                    height={1000}
                    priority={true}
                />
            </div>
            {/* bottom */}
        </div>
    )
}

export default GridImage