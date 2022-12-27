import { FilterBanner, Instagram, Portfolio, Strip } from "@components/index";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
                <FilterBanner />
                <Portfolio />
                <Strip img={"/images/meander.jpg"} title={"Meander"} subTitle={"Uitgever | Jaar | Details"} text={"Elit esse sunt labore amet ea ullamco. Dolor eiusmod culpa irure minim. Irure Lorem aliqua commodo laborum incididunt exercitation deserunt dolor excepteur exercitation irure elit veniam fugiat."} label={"editorial"} />
                <Instagram />
            </main>
        </>
    );
}


