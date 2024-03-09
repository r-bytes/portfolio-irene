import React from "react"
import { useStateContext } from "context/StateContext"

const PageBanner = ({ title, description }) => {
    const { activePage } = useStateContext()
    // Neem dan contact met mij op via het <a href="https://demo-irene.r-bytes.com/contact">contactformulier</a> op deze site.
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