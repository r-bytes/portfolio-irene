import { About } from "@components/index"
import { sanityClient, urlFor } from "sanity"

/* eslint-disable react/no-unescaped-entities */
const OverMijPage = ({ author }) => {
    const { name, email, phone, bio, image } = author[0]

    return (
        <div>
            <div className="min-h-48 bg-secondaryAccent p-12 flex-col justify-center items-center text-center">
                <h1 className="text-4xl mb-4"> Over Mij </h1>
                <p className="px-10"> Kitty kitty ears back wide eyed head nudges or stand with legs in litter box, but poop outside pounce on unsuspecting person or always ensure to lay down in such </p>
                <p className="px-10"> a manner that tail can lightly brush human's nose, so sit in window and stare ooh, a bird, yum. </p>
            </div>
            <About
                image={urlFor(image).url()}
                bio={bio}
            />
        </div>
    )
}
export default OverMijPage

export const getServerSideProps = async () => {
    const queryAuthor = `
        *[_type == "author"]{
            bio,
            email,
            image,
            name,
            phone
        }
    `;
    
    const author = await sanityClient.fetch(queryAuthor)
    
    return {
        props: {
            author
        }
    };
};



