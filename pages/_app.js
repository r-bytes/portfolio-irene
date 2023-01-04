import "../styles/globals.css";
import { Hero, Footer, Navbar } from "@components/index";

export default function App({ Component, pageProps }) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <Hero />
            <Component {...pageProps} />
            <footer className="flex h-24 w-full items-center justify-center border-t">
                <Footer />
            </footer>
        </>
    )
}

