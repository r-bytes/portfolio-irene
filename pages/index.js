import { Button, FeaturedPost, Portfolio } from "@components/index";
import Customers from "@components/layout/Customers";
import NotFeaturedPost from "@components/layout/NotFeaturedPost";
import { useStateContext } from "context/StateContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { sanityClient, urlFor } from "sanity";

export default function Home({ portfolioItems, featuredPost, notFeaturedPost, customerItems }) {
    const router = useRouter();
    const { setClickedOn } = useStateContext();

    // featured post
    const verifiedFeaturedPost = featuredPost.find((post) => post.hotspot === true);
    const { title, subtitle, description, image, buttonText, buttonUrl, bgColor, txtColor } = verifiedFeaturedPost;

    // not fetured post
    const verifiedNotFeaturedPost = notFeaturedPost.find((post) => post.image);
    const {
        title: title2,
        subtitle: subtitle2,
        description: description2,
        image: image2,
        buttonText: buttonText2,
        buttonUrl: buttonUrl2,
        bgColor: bgColor2,
        txtColor: txtColor2,
    } = verifiedNotFeaturedPost;

    useEffect(() => {
        if (router.asPath === "/") {
            setClickedOn("strips");
        }
    }, []);

    return (
        <>
            <Head>
                <title> Portfolio Irene </title>
                <meta name="description" content="Portfolio Irene" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <Portfolio portfolioItems={portfolioItems} />
                <div className="m-20 flex">
                    <Button primary href={"/portfolio"} text={"Bekijk alles"} />
                </div>
                <FeaturedPost
                    image={urlFor(image).url()}
                    title={title}
                    subtitle={subtitle}
                    description={description}
                    buttonUrl={buttonUrl}
                    buttonText={buttonText}
                    bgColor={bgColor}
                    txtColor={txtColor}
                />
                {/* <Instagram /> */}
                {verifiedNotFeaturedPost && (
                    <NotFeaturedPost
                        image={urlFor(image2).url()}
                        title={title2}
                        subtitle={subtitle2}
                        description={description2}
                        buttonUrl={buttonUrl2}
                        buttonText={buttonText2}
                        bgColor={bgColor2}
                        txtColor={txtColor2}
                    />
                )}
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
            buttonText,
            bgColor,
            txtColor
        }
    `;

    const queryNotFeatured = `
        *[_type == "notFeaturedPost"]{
            _id,
            title,
            subtitle,
            description,
            image,
            buttonUrl,
            buttonText,
            bgColor,
            txtColor
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
        revalidate: 60,
    };
};