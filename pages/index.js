import { FilterBanner, Instagram, Portfolio, Strip } from "@components/index";
import Head from "next/head";
import { sanityClient } from "sanity";

export default function Home({ portfolioItems }) {
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
                    portfolioItems={portfolioItems.slice(0, 8)}
                    // tagList={tagList}
                />
                <Strip
                    img={"/images/meander.jpg"}
                    title={"Meander"}
                    subTitle={"Uitgever | Jaar | Details"}
                    text={"Elit esse sunt labore amet ea ullamco. Dolor eiusmod culpa irure minim. Irure Lorem aliqua commodo laborum incididunt exercitation deserunt dolor excepteur exercitation irure elit veniam fugiat."}
                    label={"editorial"}
                />
                <Instagram />
            </main>
        </>
    );
}

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