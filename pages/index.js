import { Button, FeaturedPost, Instagram, Portfolio } from "@components/index";
import Customers from "@components/layout/Customers";
import NotFeaturedPost from "@components/layout/NotFeaturedPost";
import { useStateContext } from "context/StateContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { sanityClient, urlFor } from "sanity";

export default function Home({
    portfolioItems,
    featuredPost,
    notFeaturedPost,
    customerItems,
}) {
    const router = useRouter();
    const { setClickedOn } = useStateContext();
    const verifiedFeaturedPost = featuredPost.find(
        (post) => post.hotspot === true
    );
    const { title, subtitle, description, image, buttonText, buttonUrl } =
        verifiedFeaturedPost;

    console.log("=====> verifiedFeaturedPost: ", verifiedFeaturedPost);

    const verifiedNotFeaturedPost = notFeaturedPost.find(
        (post) => post.hotspot === true
    );

    useEffect(() => {
        if (router.asPath === "/") {
            setClickedOn("strips");
        }
    }, []);

    console.log("=====> verifiedNotFeaturedPost: ", verifiedNotFeaturedPost);

    return (
        <>
            <Head>
                <title> Portfolio Irene </title>
                <meta name="description" content="Portfolio Irene" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <Portfolio portfolioItems={portfolioItems} />
                <div className="m-10 flex">
                    <Button primary href={"/portfolio"} text={"Bekijk alles"} />
                </div>
                <FeaturedPost
                    image={urlFor(image).url()}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    buttonUrl={buttonUrl}
                    buttonText={buttonText}
                />
                <Instagram />
                {verifiedNotFeaturedPost ? (
                    <NotFeaturedPost
                        image={urlFor(verifiedNotFeaturedPost?.image2).url()}
                        title={verifiedNotFeaturedPost?.title2}
                        subtitle={verifiedNotFeaturedPost?.subtitle2}
                        description={verifiedNotFeaturedPost?.description2}
                        buttonUrl={verifiedNotFeaturedPost?.buttonUrl2}
                        buttonText={verifiedNotFeaturedPost?.buttonText2}
                    />
                ) : null}

                <Customers customerItems={customerItems} />
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
       *[_type == "featuredPost"]{
            _id,
            title,
            subtitle,
            description,
            hotspot,
            image,
            buttonUrl,
            buttonText
        }
    `;

    const queryNotFeatured = `
        *[_type == "notFeaturedPost"]{
            _id,
            title,
            subtitle,
            description,
            hotspot,
            image,
            buttonUrl,
            buttonText
        }
    `;

    const queryCustomers = `
    *[_type == "customers"]| order(_createdAt desc){
        _id,
        title,
        image
    }
`;

    const portfolioItems = await sanityClient.fetch(queryPortfolio);
    const featuredPost = await sanityClient.fetch(queryFeatured);
    const notFeaturedPost = await sanityClient.fetch(queryNotFeatured);
    const customerItems = await sanityClient.fetch(queryCustomers);

    return {
        props: {
            portfolioItems,
            featuredPost,
            notFeaturedPost,
            customerItems,
        },
    };
};
