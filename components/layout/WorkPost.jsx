import Image from "next/image"
import { Button } from "../index"
import React from "react"

const WorkPost = ({ items }) => {
    const workItems = items.map(({ _id, title, subtitle, description, content }) => (
        <React.Fragment key={_id}>
            <div className={content.length > 3 ? "mx-auto text-center p-2 sm:p-12 mt-0" : "block w-full text-center"}>
                <h1 className="text-2xl font-extralight tracking-wider mb-12 mt-12"> {title} </h1>
                <h3 className="tracking-wide leading-7 mt-4"> {subtitle} </h3>
                <h3 className="tracking-wide leading-7 my-8 px-4"> {description} </h3>
            </div>
            <div
                className={
                    content.length > 3
                        ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2"
                        : "grid grid-cols-1 sm:grid-cols-2 px-4 md:flex space-x-8"
                }
            >
                {content.map(({ _id, imageUrl, title, buttonText, buttonUrl }) => (
                    <div className="flex flex-col justify-center items-center gap-4 pb-6 mx-auto w-80" key={_id}>
                        <h2 className="font-bold px-4 pt-10 h-24"> {title} </h2>
                        <Image className="w-72 h-96" height={250} width={250} src={imageUrl} alt={title} />
                        {buttonText && buttonUrl ? <Button ext primary text={buttonText} href={buttonUrl} /> : <div key={_id} className="h-10"></div>}
                    </div>
                ))}
            </div>
        </React.Fragment>
    ));

    return (
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row flex-wrap md:justify-center md:items-center mb-12">
            {workItems}
        </div>
    )
}
export default WorkPost