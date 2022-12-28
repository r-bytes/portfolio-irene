/* eslint-disable react/no-unescaped-entities */
import { Portfolio } from "@components/index"

const PortfolioPage = () => {
    const portfolioItems = [
        { id: 1, name: "item1", label: "editorial" },
        { id: 2, name: "item2", label: "editorial" },
        { id: 3, name: "item3", label: "editorial" },
        { id: 4, name: "item4", label: "strips" },
        { id: 5, name: "item5", label: "strips" },
        { id: 6, name: "item6", label: "eigen werk" },
        { id: 7, name: "item7", label: "eigen werk" },
        { id: 8, name: "item8", label: "in opdracht" },
        { id: 9, name: "item9", label: "eigen werk" },
        { id: 10, name: "item10", label: "in opdracht" }
    ]

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="min-h-48 bg-secondaryAccent p-12 flex-col justify-center items-center text-center">
                <h1 className="text-4xl mb-4"> Portfolio </h1>
                <p className="px-10"> Kitty kitty ears back wide eyed head nudges or stand with legs in litter box, but poop outside pounce on unsuspecting person or always ensure to lay down in such </p>
                <p className="px-10"> a manner that tail can lightly brush human's nose, so sit in window and stare ooh, a bird, yum. </p>
            </div>
            <Portfolio portfolioItems={portfolioItems} className="mx-auto" />
        </div>
    )
}
export default PortfolioPage