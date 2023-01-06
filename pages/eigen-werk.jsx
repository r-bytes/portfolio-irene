import { WorkPost } from "@components/index";
import { sanityClient } from "sanity";

/* eslint-disable react/no-unescaped-entities */
const EigenWerkPage = ({ workItems }) => {
    return (
        <div>
            <div className="min-h-48 bg-secondaryAccent p-12 flex-col justify-center items-center text-center">
                <h1 className="text-4xl mb-4"> Eigen Werk </h1>
                <p className="px-10"> Kitty kitty ears back wide eyed head nudges or stand with legs in litter box, but poop outside pounce on unsuspecting person or always ensure to lay down in such </p>
                <p className="px-10"> a manner that tail can lightly brush human's nose, so sit in window and stare ooh, a bird, yum. </p>
            </div>
            <WorkPost
                items={workItems}
            />
        </div>
    )
}
export default EigenWerkPage

export const getServerSideProps = async () => {
    const queryWork = `
        *[_type == "work"]| order(_createdAt desc){
            _id,
            title,
            subtitle,
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
    
    const workItems = await sanityClient.fetch(queryWork)
    
    return {
        props: {
            workItems
        }
    };
};