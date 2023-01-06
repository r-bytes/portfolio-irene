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
            <footer >
                <Footer />
            </footer>
        </>
    )
}