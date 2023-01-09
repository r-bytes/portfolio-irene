import { Navbar, Footer, Hero } from ".."

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Hero />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}
export default Layout