import { Button, Instagram, Portfolio, FeaturedPost } from "@components/index";
import Head from "next/head";
import { sanityClient, urlFor } from "sanity";

export default function Home({ portfolioItems, featuredPost }) {
    const verifiedFeaturedPost = featuredPost.find(post => post.hotspot === true)
    const {title, subtitle, description, image, tagList, buttonText, buttonUrl } = verifiedFeaturedPost

    return (
        <>
            <Head>
                <title> Portfolio Irene </title>
                <meta name="description" content="Portfolio Irene" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <Portfolio
                    portfolioItems={portfolioItems.slice(1, 9)}
                />
                <div className="m-10 flex">
                    <Button
                        primary
                        href={"/portfolio"}
                        text={"Bekijk alles"}
                    />
                </div>
                <FeaturedPost
                    image={urlFor(image).url()}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    tag={tagList[0].title} // first tag only
                    buttonUrl={buttonUrl}
                    buttonText={buttonText}
                />
                <Instagram />
            </main>
        </>
    );
}

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

    const queryFeatured = `
        *[_type == "featured" && tags[0]._ref in *[_type == "tags"]._id]{
            _id,
            title,
            subtitle,
            description,
            hotspot,
            image,
            "tagList": tags[0..10] -> {
                title
            },
            buttonUrl,
            buttonText
        }
    `;
    
    const portfolioItems = await sanityClient.fetch(queryPortfolio)
    const featuredPost = await sanityClient.fetch(queryFeatured)
    
    return {
        props: {
            portfolioItems,
            featuredPost
        }
    };
};