/* eslint-disable react/no-unescaped-entities */
import { PageBanner, Portfolio } from "@components/index"
import { sanityClient } from "sanity";

const PortfolioPage = ({ portfolioItems, bannerContent }) => {
    const { title, subtitle } = bannerContent
    return (
        <div className="flex flex-col justify-center items-center mb-16">
            <PageBanner
                title={title}
                description={description}
            />
            <Portfolio // => Portfolio
                portfolioItems={portfolioItems}
            />
        </div>
    )
}
export default PortfolioPage

export const getServerSideProps = async () => {
    const queryPortfolio = `
        *[_type == "portfolio" && tags[0]._ref in *[_type == "tags"]._id]| order(_createdAt desc){
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
    
    const queryBanner = `
        *[_type == "pageBanner" && title == "Portfolio"][0]
    `;
    
    const portfolioItems = await sanityClient.fetch(queryPortfolio)
    const bannerContent = await sanityClient.fetch(queryBanner)
    
    return {
        props: {
            portfolioItems,
            bannerContent
        }
    };
};