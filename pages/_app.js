import "../styles/globals.css";
import { Footer, Navbar } from "@components/navigation";
import { Hero } from "@components/layout";

export default function App({ Component, pageProps }) {
    return (
        <>
            <header className="h-8 text-center w-full items-center justify-center border-b">
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
