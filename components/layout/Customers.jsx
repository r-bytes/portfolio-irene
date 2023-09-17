import Image from "next/image";
import { urlFor } from "sanity";
import { MultiCarousel } from "..";

const Customers = ({ customerItems }) => {
    const items = customerItems?.map((item) => (
        <div key={item._id}>
            <Image
                className=""
                height={100}
                width={200}
                alt={item.title}
                src={urlFor(item.image)?.url()}
            />
        </div>
    ));

    return (
        <>
            <h1 className="text-3xl font-thin tracking-wider">
                {" "}
                Klanten waarvoor ik werk{" "}
            </h1>
            <MultiCarousel items={items} />
        </>
    );
};
export default Customers;
