import { PageBanner, WorkPost } from "@components/index";
import { sanityClient } from "sanity";

/* eslint-disable react/no-unescaped-entities */
const EigenWerkPage = ({ workItems, bannerContent }) => {
    const { title, description } = bannerContent

    return (
        <>
            <PageBanner
                title={title}
                description={description}
            />
            <WorkPost
                items={workItems}
            />
        </>
    )
}
export default EigenWerkPage

export const getServerSideProps = async () => {
    const queryWork = `
        *[_type == "work"]| order(_createdAt asc){
            _id,
            title,
            subtitle,
            description,
            "content": contentArray[0..10]{
                _key,
                title,
                description,
                "imageUrl": asset -> url,
                buttonText,
                buttonUrl,
            }
        }
    `;

    const queryBanner = `
        *[_type == "pageBanner" && title == "Eigen Werk"][0]
    `;
    
    const workItems = await sanityClient.fetch(queryWork)
    const bannerContent = await sanityClient.fetch(queryBanner)
    
    return {
        props: {
            workItems,
            bannerContent
        },
        revalidate: 10,
    };
};