/* eslint-disable react/no-unescaped-entities */
import { Portfolio } from "@components/index"
import { sanityClient } from "sanity";

const PortfolioPage = ({ portfolioItems }) => {
    console.log(portfolioItems);
    return (
        <div className="flex flex-col justify-center items-center">
            {/* Banner */}
            <div className="w-full min-h-48 bg-secondaryAccent p-12 flex-col justify-center items-center text-center">
                <h1 className="text-4xl mb-4"> Portfolio </h1>
                <p className="px-10"> Kitty kitty ears back wide eyed head nudges or stand with legs in litter box, but poop outside pounce on unsuspecting person or always ensure to lay down in such </p>
                <p className="px-10"> a manner that tail can lightly brush human's nose, so sit in window and stare ooh, a bird, yum. </p>
            </div>
            {/* Portfolio */}
            <Portfolio
                portfolioItems={portfolioItems}
            />
        </div>
    )
}
export default PortfolioPage

export const getServerSideProps = async () => {
    const queryPortfolio = `
        *[_type == "portfolio" && tags[0]._ref in *[_type == "tags"]._id]{
            _id,
            title,
            subtitle,
            description,
            image,
            "tagList": tags[0..5] -> {
                title
            }
        }
    `;
    
    const portfolioItems = await sanityClient.fetch(queryPortfolio)
    
    return {
        props: {
            portfolioItems
        }
    };
};