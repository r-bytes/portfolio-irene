import { useHover } from "@hooks/index";
import { IconButton } from "@material-ui/core";
import { useStateContext } from "context/StateContext";
import Image from "next/image";
import { useRouter } from "next/router";
import { urlFor } from "sanity";

const GridImage = ({ id, title, subtitle, image, description, tags }) => {
    const navigateTo = useRouter().push;
    const { setClickedOn } = useStateContext();
    const [hovered, hoverRef] = useHover();

    const handleClick = (tagName) => {
        setClickedOn(tagName); // set clicked item in context
        // navigateTo("/portfolio") => (slice produces a "bug")
    };

    return (
        <div
            className="border group mx-auto flex flex-col relative"
            ref={hoverRef}
        >
            {/* => Card Image */}
            <div className="max-w-sm max-h-sm">
                {" "}
                <Image
                    className="object-cover max-h-80 w-80"
                    alt={image}
                    src={urlFor(image).url()}
                    width={500}
                    height={500}
                    priority={true}
                />
            </div>

            {/* Card Image Overlay */}
            {hovered ? (
                <div className="absolute top-0 bottom-0 text-primary  group-hover:bg-primaryAccent group-hover:opacity-80 transition-transform duration-300 ease-in-out text-left flex flex-col justify-evenly">
                    <div
                        className="border h-full flex flex-col justify-between items-start p-6 cursor-pointer hover:text-[#3c3c3c]"
                        onClick={() => navigateTo(`/portfolio/${id}`)}
                    >
                        {/* Title, subtitle */}
                        <div className="w-fit">
                            <h1 className="text-xl font-semibold ">
                                {" "}
                                {title}{" "}
                            </h1>
                            <h3 className="text-sm mb-2"> {subtitle} </h3>
                        </div>
                        {/* Description */}
                        <p className="mb-3 leading-5 text-sm">{description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3">
                            {tags.length > 1 ? (
                                tags.map(
                                    (
                                        t,
                                        index // => Object has Multiply tags
                                    ) => (
                                        <IconButton
                                            key={index}
                                            style={{
                                                borderRadius: "0px",
                                                padding: "0px",
                                            }}
                                            onClick={() => handleClick(t)}
                                        >
                                            <span className="py-0.5 px-3 border border-black text-black self-start hover:cursor-pointer text-sm">
                                                {t}
                                            </span>
                                        </IconButton>
                                    )
                                )
                            ) : (
                                // Object has just 1 tag
                                <IconButton
                                    style={{
                                        borderRadius: "0px",
                                        padding: "0px",
                                    }}
                                    onClick={() => handleClick(tags[0])}
                                >
                                    <span className="py-0.5 px-3 border border-black text-black text-base self-start hover:cursor-pointer">
                                        {tags[0]}
                                    </span>
                                </IconButton>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default GridImage;
