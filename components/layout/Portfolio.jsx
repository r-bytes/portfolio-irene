import { Button } from "@components/index"

const Portfolio = () => {
    const portfolioItems = [
        { id: 1, name: "item1" },
        { id: 2, name: "item2" },
        { id: 3, name: "item3" },
        { id: 4, name: "item4" },
        { id: 5, name: "item5" },
        { id: 6, name: "item6" },
        { id: 7, name: "item7" },
        { id: 8, name: "item8" }
    ]

    return (
        <>
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