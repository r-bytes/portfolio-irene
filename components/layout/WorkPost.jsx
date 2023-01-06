import Image from "next/image"
import { Button } from "../index"
import React from "react"

const WorkPost = ({ items }) => {
    const workItems = items.map(item => (
        <React.Fragment key={item._id}>

            <div className="mt-10 mx-auto text-center ">
                <h1 className="text-2xl font-extralight mb-2"> {item.title} </h1>
                <h3 className="tracking-wide leading-7"> {item.subtitle} </h3>
            </div>
            <div className="flex justify-center items-center space-x-10">
                {item.content.map(img => (
                    <div
                    className="flex flex-col justify-center items-center gap-4 pb-6"
                    key={img._id}
                    >
                        <h2 className="font-bold px-4 pt-10"> {img.title} </h2>
                        <Image
                            key={img._id}
                            height={250}
                            width={250}
                            src={img.imageUrl}
                            alt={img.title}
                            />
                        <Button
                            primary
                            text={img.buttonText}
                            href={img.buttonUrl}
                            />
                    </div>
                ))}
            </div>
        </React.Fragment>
    ))

    return (
        <div className="max-w-5xl mx-auto my-10 flex flex-wrap justify-center items-center">
            {workItems}
        </div>
    )
}
export default WorkPost