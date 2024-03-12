import { About, PageBanner } from "@components/index"
import { sanityClient, urlFor } from "sanity"

/* eslint-disable react/no-unescaped-entities */
const OverMijPage = ({ aboutContent, bannerContent }) => {
    const { _id, bio, image } = aboutContent
    const { title, description } = bannerContent

    return (
        <>
            <PageBanner
                title={title}
                description={description}
            />
            <About
                image={urlFor(image).url()}
                bio={bio}
                id={_id}
            />
        </>
    )
}
export default OverMijPage

export const getServerSideProps = async () => {
    const queryAbout = `
        *[_type == "about"][0]{
            _id,
            bio,
            image
        }
    `;

    const queryBanner = `
        *[_type == "pageBanner" && title == "Over Mij"][0]
    `;
    
    
    const aboutContent = await sanityClient.fetch(queryAbout)
    const bannerContent = await sanityClient.fetch(queryBanner)
    
    return {
        props: {
            aboutContent,
            bannerContent,
        },
        // revalidate: 10,
    };
};



