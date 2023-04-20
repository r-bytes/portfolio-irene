import Image from "next/image";
import { urlFor } from "sanity";
import { MultiCarousel } from "..";

const Customers = ({ customerItems }) => {
    const items = customerItems?.map(item => (
        <div
            key={item._id}
        >

        <Image
            className="p-1 filled-icon"
            height={200}
            width={200}
            alt={item.title}
            src={urlFor(item.image)?.url()}
            />
        </div>
    ))

    return (
        <>
            <h1 className="mt-8 text-3xl font-thin tracking-wider"> Klanten waarvoor ik werk </h1>
            <MultiCarousel items={items} />
        </>
    )

    
}
export default Customers