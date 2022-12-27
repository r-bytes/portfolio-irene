import { Button } from "@components/index"

const Instagram = () => {
    const instagramItems = [
        { id: 1, name: "item1" },
        { id: 2, name: "item2" },
        { id: 3, name: "item3" },
        { id: 4, name: "item4" },
        { id: 5, name: "item5" },
        { id: 6, name: "item6" }
    ]

    return (
        <>
            <h1 className="mt-8 text-3xl font-thin tracking-wider"> Volg mij online </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-8">
                {instagramItems.map(i => (
                    <div key={i.id} className="w-96 h-96 md:w-72 md:h-72 lg:w-64 lg:h-64 border"> {i.name} </div>
                ))}
            </div>
            <div className="pb-8">
                <Button text={"Instagram"} href={"https://www.duckduckgo.com"} primary />
            </div>
        </>
    )
}
export default Instagram