import React from "react"

const PageBanner = ({ title, description }) => {
    return (
        <div className="min-h-48 w-full bg-secondaryAccent px-2 py-10 sm:p-12 flex-col justify-center items-center text-center">
            <h1 className="text-4xl mb-4"> {title} </h1>
            <p className="px-10 max-w-7xl mx-auto leading-7">
                {description?.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
    )
}
export default PageBanner