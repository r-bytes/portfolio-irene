import { FilterBanner, Instagram, Portfolio, Strip } from "@components/index";
import Head from "next/head";
import { sanityClient } from "sanity";

export default function Home() {
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
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Portfolio Irene" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <Portfolio portfolioItems={portfolioItems.slice(0, 8)} />
                <Strip img={"/images/meander.jpg"} title={"Meander"} subTitle={"Uitgever | Jaar | Details"} text={"Elit esse sunt labore amet ea ullamco. Dolor eiusmod culpa irure minim. Irure Lorem aliqua commodo laborum incididunt exercitation deserunt dolor excepteur exercitation irure elit veniam fugiat."} label={"editorial"} />
                <Instagram />
            </main>
        </>
    );
}