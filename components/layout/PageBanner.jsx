const PageBanner = ({ title, subtitle }) => {
    return (
        <div className="min-h-48 w-full bg-secondaryAccent px-2 py-10 sm:p-12 flex-col justify-center items-center text-center">
            <h1 className="text-4xl mb-4"> {title} </h1>
            <p className="px-10 max-w-7xl mx-auto leading-7"> {subtitle} </p>
        </div>
    )
}
export default PageBanner