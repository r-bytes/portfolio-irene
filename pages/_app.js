import { Layout } from "@components/index";
import { StateContext } from "context/StateContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <>
            <StateContext>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </StateContext>
        </>
    );
}
