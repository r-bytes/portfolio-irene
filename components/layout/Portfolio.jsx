import { Button, FilterBanner } from "@components/index"

const Portfolio = ({ portfolioItems }) => {
    return (
        <>
            <FilterBanner />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-8">
                {portfolioItems.map(p => (
                    <div key={p.id} className="w-96 h-96 md:w-72 md:h-72 lg:w-48 lg:h-48 border"> {p.name} </div>
                ))}
            </div>
            <div className="pb-8">
                <Button text={"Bekijk alles"} href={"https://www.duckduckgo.com"} primary />
            </div>
        </>
    )
}
export default Portfolio