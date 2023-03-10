import { StateContext } from "context/StateContext";
import "../styles/globals.css";
import { Layout } from "@components/index";

export default function App({ Component, pageProps }) {
    return (
        <>
            <StateContext>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </StateContext>
        </>
    )
}