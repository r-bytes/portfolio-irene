import Image from "next/image"
import React from "react"

const About = ({ bio, image }) => {
    return (
        <div className="flex flex-col justify-between items-center mx-auto p-10 lg:p-20 max-w-7xl">
            <div className="order-2 lg:w-5/6 text-primary mt-8">
                <p className="text-center mx-auto lg:text-left leading-6 tracking-wider">
                    {bio?.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
            </div>
            <div className="order-1 w-full px-4 max-w-lg  mb-6 flex justify-center items-center">
                <Image
                    className="w-full"
                    width={1000}
                    height={1000}
                    src={image}
                    alt={image}
                />
            </div>
        </div>
    )
}
export default About