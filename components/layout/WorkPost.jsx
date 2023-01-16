import Image from "next/image"
import { Button } from "../index"
import React from "react"

const WorkPost = ({ items }) => {
    const workItems = items.map(({ _id, title, subtitle, content }) => (
        <React.Fragment key={_id}>

            <div className="mx-auto text-center p-2 sm:p-12">
                <h1 className="text-2xl font-extralight mb-2 tracking-wider"> {title} </h1>
                <h3 className="tracking-wide leading-7"> {subtitle} </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
                {content.map(({_id, imageUrl, title, buttonText, buttonUrl}, index) => (
                    <div
                        className="flex flex-col justify-center items-center gap-4 pb-6"
                        key={index}
                    >
                        <h2 className="font-bold px-4 pt-10"> {title} </h2>
                        <Image
                            height={250}
                            width={250}
                            src={imageUrl}
                            alt={title}
                        />
                        {buttonText ?
                            <Button
                                primary
                                text={buttonText}
                                href={buttonUrl}
                            />
                            : <div key={index} className="h-10"></div>
                        }
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